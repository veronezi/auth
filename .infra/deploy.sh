#!/usr/bin/env bash
set -e

helm del --purge auth | true
helm package auth
helm install --name auth auth-0.1.0.tgz
