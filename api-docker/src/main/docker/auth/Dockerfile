ARG VERSION
ARG NODE_VERSION

FROM veronezi/dockerize:${DOCKERIZE_VERSION} AS dockerz
FROM veronezi/auth-keys:${VERSION} AS keys
FROM node:${NODE_VERSION}-alpine AS auth-ui-build

USER root

RUN mkdir -p /opt/auth
RUN mkdir -p /opt/keys/private
RUN mkdir -p /opt/keys/public
COPY --from=keys /opt/keys/privatekey.pem /opt/keys/private/auth_rsa
COPY --from=keys /opt/keys/publickey.pem /opt/keys/public/auth_rsa.pub
WORKDIR /opt/auth

RUN chown node:node -R /opt

ENV PUBLIC_KEY_DIR=/opt/keys/public
ENV PRIVATE_KEY_DIR=/opt/keys/private
ENV AUTH_ACCESS_TOKEN_EXPIRATION_TIME=10m
ENV AUTH_REFRESH_TOKEN_EXPIRATION_TIME=1h
ENV AUTH_TOKEN_ISS=auth
ENV AUTH_TOKEN_AUD=auth
ENV AUTH_TOKEN_GROUPS_CSV=todo,crawler

RUN apk add --no-cache bash
COPY --from=dockerz /usr/local/bin/dockerize /usr/local/bin/

USER node

WORKDIR /opt
COPY --chown=node:node run.sh .
RUN chmod +x run.sh

WORKDIR /opt/auth

COPY --chown=node:node auth-jwt-${VERSION} .

RUN npm install
RUN npm run-script test

EXPOSE 3000

ENTRYPOINT ["/opt/run.sh"]
CMD ["index.js"]
