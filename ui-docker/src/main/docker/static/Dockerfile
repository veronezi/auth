ARG VERSION
ARG NODE_VERSION
ARG DOCKERIZE_VERSION
ARG YARN_VERSION

FROM veronezi/dockerize:${DOCKERIZE_VERSION} AS dockerz

# Install the node_modules from the package.json only. This way we void installing
# the whole node_modules directory again everytime we change any of the application
# files but package.json.
FROM node:${NODE_VERSION}-alpine AS jwt-auth-ui-install
USER root
RUN apk --no-cache add curl bash
RUN mkdir -p /opt/ui
WORKDIR /opt/ui
RUN chown node:node -R /opt
USER node
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version ${YARN_VERSION}
COPY --chown=node:node auth-jwt-ui-${VERSION}/package.json .
RUN yarn install

# With the previously node_modules direcotry in place, now run the tests and the build of the
# production code.
FROM node:${NODE_VERSION}-alpine AS jwt-auth-ui-build
USER root
RUN apk --no-cache add curl bash
RUN mkdir -p /opt/ui
WORKDIR /opt/ui
RUN chown node:node -R /opt
USER node
COPY --from=jwt-auth-ui-install --chown=node:node /opt/ui/node_modules ./node_modules
COPY --chown=node:node auth-jwt-ui-${VERSION} .
RUN export CI=true && yarn test
RUN yarn build

# Create the httpd server that will serve the production code created above.
FROM httpd:2.4.34-alpine
RUN apk add --no-cache bash
COPY --from=dockerz /usr/local/bin/dockerize /usr/local/bin/
COPY --from=jwt-auth-ui-build /opt/ui/build /usr/local/apache2/htdocs/
COPY httpd.conf /usr/local/apache2/conf/
COPY httpd-vhosts.conf /usr/local/apache2/conf/extra/

ENV VERONEZI_AUTH_PATH=http://auth:3000

COPY  run.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/run.sh
ENTRYPOINT ["/usr/local/bin/run.sh"]
