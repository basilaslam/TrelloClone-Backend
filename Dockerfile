FROM node:latest AS builder
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm i

RUN npm run build


FROM node:16.17.0-bullseye-slim as runner

ENV NODE_ENV production
ENV SECRET_KEY SECRET_KEY
ENV MONGODB_URL MONGODB_URL
ENV PORT 3000
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/built /usr/src/app/
COPY --chown=node:node . /usr/src/app
EXPOSE 3000
CMD ["node", "server.js"]