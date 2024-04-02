const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url);
        if(url.pathname === '/'){
            return Response.json({msg:'Hello World!'})
        }
        else if(url.pathname === '/about'){
            return Response.json({msg:'About Us'})
        }
        return new Response(JSON.stringify({status:404,msg:'Not Found'}));
    }
})

console.log(`Listening on http://localhost:${server.port} ...`);