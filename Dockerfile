FROM ubuntu:20.04
COPY --from=denoland/deno:ubuntu-1.13.0 /usr/bin/deno /usr/local/bin/deno
COPY ./main.ts ./main.ts
RUN deno cache ./main.ts
CMD ["deno", "run", "--allow-net", "--allow-hrtime", "./main.ts"]
