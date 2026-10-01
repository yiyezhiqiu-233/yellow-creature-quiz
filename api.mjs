import {validateSubmission} from './public/core.js';
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...headers}});
export async function api(request,db){
 const url=new URL(request.url);let cookie=(request.headers.get('cookie')||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('yellow_session='))?.slice(15);
 if(!/^[a-f0-9]{64}$/.test(cookie||''))cookie=Array.from(crypto.getRandomValues(new Uint8Array(32)),x=>x.toString(16).padStart(2,'0')).join('');
 const headers={'Set-Cookie':`yellow_session=${cookie}; HttpOnly; SameSite=Strict; Path=/; Max-Age=31536000${url.protocol==='https:'?'; Secure':''}`};
 try{
  if(request.method==='GET'&&url.pathname==='/api/results'){
   const rows=await db.prepare('SELECT payload FROM results WHERE owner = ? ORDER BY created_at DESC LIMIT 100').bind(cookie).all();
   return json({results:rows.results.map(r=>JSON.parse(r.payload))},200,headers);
  }
  if(request.method==='POST'&&url.pathname==='/api/results'){
   const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return json({error:'请求来源不正确。'},403);
   const text=await request.text();if(text.length>4096)return json({error:'记录过大。'},413);
   let data;try{data=validateSubmission(JSON.parse(text));}catch(e){return json({error:e.message},400,headers);}
   const existing=await db.prepare('SELECT payload FROM results WHERE id = ? AND owner = ?').bind(data.id,cookie).first();
   if(existing)return json({result:JSON.parse(existing.payload)},200,headers);
   const result={...data,createdAt:new Date().toISOString()};
   await db.prepare('INSERT INTO results (id, owner, created_at, payload) VALUES (?, ?, ?, ?) ON CONFLICT(id, owner) DO NOTHING').bind(result.id,cookie,result.createdAt,JSON.stringify(result)).run();
   return json({result},201,headers);
  }
  return json({error:'没有找到这个接口。'},404,headers);
 }catch(e){console.error('Result storage:',e.message);return json({error:'记录暂时无法保存或读取，请稍后重试。'},503,headers);}
}
