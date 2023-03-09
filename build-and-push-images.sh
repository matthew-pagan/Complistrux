#!/bin/bash

##############################
# This builds and pushes both the nginx/React image
# and the DRF one.  
#
# The nginx/React image gets built with an environment variable
# that sets the url of the DRF backend REACT_APP_BASE_URL.  Once you
# know the IP address of your EC2 instance, you would pass that in
# instead of localhost
##############################

BASE_URL=$1
NEW_VERSION=$2

docker buildx build --platform linux/amd64 --build-arg REACT_APP_BASE_URL=$BASE_URL -t matt1821/webserver-prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
docker push matt1821/webserver-prod:$NEW_VERSION

docker buildx build --platform linux/amd64  -t matt1821/backend-prod-auth:$NEW_VERSION -f backend/auth_system/Dockerfile ./backend/auth_system --no-cache
docker push matt1821/backend-prod-auth:$NEW_VERSION

docker buildx build --platform linux/amd64  -t matt1821/backend-prod:$NEW_VERSION -f backend/complistrux/Dockerfile ./backend/complistrux --no-cache
docker push matt1821/backend-prod:$NEW_VERSION

