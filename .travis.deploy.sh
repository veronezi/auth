#!/bin/bash
set -e

function deploy_docker_image () {
    if [ "$TRAVIS_BRANCH" = "master" ]; then
        echo "deploying docker image veronezi/$1:$AUTH_VERSION-b$TRAVIS_BUILD_NUMBER"
        docker push $1:$AUTH_VERSION-b$TRAVIS_BUILD_NUMBER
        docker push $1
    else
       echo "not building master. we wont deploy the docker images."
    fi
}

deploy_docker_image veronezi/auth-jwt
deploy_docker_image veronezi/auth-keys
deploy_docker_image veronezi/auth-facade
deploy_docker_image veronezi/auth-static

echo "binaries uploaded"
