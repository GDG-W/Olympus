set -e

SERVICE_NAME=wakanda
VERSION=${SERVICE_NAME}-$(git describe --always)
REPOSITORY="emmanuerl/dflagos24"
TAG=${REPOSITORY}:${VERSION}

build(){
  docker build --platform linux/amd64 -t ${TAG} .
}

push(){
  echo pushing image ${TAG} to docker registry
  docker push ${REPOSITORY} -a         
}

cleanup(){
  echo "successfully built and pushed ${TAG} @ $(date)"

  echo "docker rm -f ${SERVICE_NAME}.devfest.notkruse.dev && docker run --name ${SERVICE_NAME}.devfest.notkruse.dev -p 11100:80 -d ${TAG}"
}

build
push
cleanup