import {mkdir,cp,writeFile,readFile} from 'node:fs/promises';
await mkdir('dist/server',{recursive:true});
await cp('public','dist/client',{recursive:true});
await writeFile('dist/server/api.mjs',(await readFile('api.mjs','utf8')).replace("'./public/core.js'","'../client/core.js'"));
await writeFile('dist/server/index.js',`import {api} from './api.mjs';
export default { async fetch(request,env){
 const url=new URL(request.url);
 if(url.pathname.startsWith('/api/'))return api(request,env.DB);
 return env.ASSETS.fetch(request);
}};`);
console.log('Built: dist/client and dist/server/index.js');
