import {createServer} from 'node:http';
import {readFile,mkdir} from 'node:fs/promises';
import {DatabaseSync} from 'node:sqlite';
import {api} from './api.mjs';
import {resolve,extname} from 'node:path';
const root=resolve('public');
await mkdir('.data',{recursive:true});
const sqlite=new DatabaseSync('.data/results.sqlite');
sqlite.exec('CREATE TABLE IF NOT EXISTS results (id TEXT NOT NULL, owner TEXT NOT NULL, created_at TEXT NOT NULL, payload TEXT NOT NULL, PRIMARY KEY(id,owner)); CREATE INDEX IF NOT EXISTS idx_results_owner_created ON results(owner,created_at);');
const db={prepare(sql){return {bind(...args){const stmt=sqlite.prepare(sql);return {async all(){return {results:stmt.all(...args)};},async first(){return stmt.get(...args)||null;},async run(){return stmt.run(...args);}};}};}};
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.mp3':'audio/mpeg'};
createServer(async(req,res)=>{try{
 const url=new URL(req.url,`http://${req.headers.host}`);
 if(url.pathname.startsWith('/api/')){
  const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>4096){res.writeHead(413).end();return;}chunks.push(chunk);}
  const request=new Request(url,{method:req.method,headers:req.headers,body:req.method==='GET'||req.method==='HEAD'?undefined:Buffer.concat(chunks)});
  const response=await api(request,db);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(await response.text());return;
 }
 const file=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(root+'/')&&!file.startsWith(root+'\\')){res.writeHead(403).end();return;}
 const data=await readFile(file);const type=types[extname(file)]||'application/octet-stream';const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
 if(range){const start=+range[1],end=Math.min(range[2]?+range[2]:data.length-1,data.length-1);if(start>end){res.writeHead(416,{'Content-Range':`bytes */${data.length}`}).end();return;}res.writeHead(206,{'Content-Type':type,'Content-Range':`bytes ${start}-${end}/${data.length}`,'Content-Length':end-start+1,'Accept-Ranges':'bytes'});res.end(data.subarray(start,end+1));}
 else{res.writeHead(200,{'Content-Type':type,'Content-Length':data.length,'Accept-Ranges':'bytes','Cache-Control':'no-cache'});res.end(data);}
 }catch(e){res.writeHead(404).end('Not found');}}).listen(4173,'0.0.0.0',()=>console.log('Preview: http://localhost:4173'));
