#!/usr/bin/env bash
set -e

# This is an utility script created for development purposes.
# Use it from the maven target/helm directory after using mvn clean install to build the chart.

docker_tag () {
    docker tag veronezi/$1 localhost:32000/$1 > /dev/null
    echo "   localhost:32000/$1"
    docker push localhost:32000/$1
    docker rmi localhost:32000/$1
}

echo "Uploading the images..."
docker_tag auth-api:${project.version}
docker_tag auth-ui:${project.version}

cd "$(dirname "$0")"
helm del --purge auth | true
helm install --name auth -f localvalues.yaml auth-${project.version}.tgz



