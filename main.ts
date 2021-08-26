import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";

const app = new Application();

const fruits = ["banana", "strawberry", "camerise", "apple", "orange"]

// deno-lint-ignore no-explicit-any
app.use((ctx: any) => {
  const start = performance.now();
  ctx.response.body = fruits[Math.floor(Math.random()*fruits.length)];
  console.log(`${new Date().toISOString()} GET 200 OK ${new URL(ctx.request.url).pathname} ${(performance.now() - start).toFixed(0)}ms`);
});

await app.listen({ port: 8000 });