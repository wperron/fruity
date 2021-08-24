const listener = Deno.listen({ port: 8000 });
for await (const conn of listener) {
  (async () => {
    const requests = Deno.serveHttp(conn);
    for await (const req of requests) {
      const start = performance.now();
      req.respondWith(new Response("Hello world", { headers: { "server": "fruity" } }));
      console.log(`${new Date().toISOString()} GET 200 OK ${new URL(req.request.url).pathname} ${(performance.now() - start).toFixed(0)}ms`)
    }
  })();
}