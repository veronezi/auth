#!/usr/bin/env bash
set -e

helm init --client-only
helm package auth
chown 1000:1000 auth-*.tgz
