FROM denoland/deno:ubuntu-1.13.2
COPY ./main.ts ./main.ts
CMD ["deno", "run", "--allow-net", "--allow-hrtime", "./main.ts"]
