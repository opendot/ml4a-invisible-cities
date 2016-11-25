#!/usr/bin/env bash

echo "---------------------------------------"
echo "   deploying development environment   "
echo "---------------------------------------"

#Build docker container
docker build -t sketch2map-development .

#Run docker container
nvidia-docker run -v $(pwd):/home -it -p 3000:3000 -p 8000:8000 sketch2map-development bash
