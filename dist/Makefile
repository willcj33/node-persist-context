PROJECT=test-context-proxy
VERSION=$(shell jq -r '.version' ../package.json)

all: build

build:
	sed 's//${VERSION}/g' Dockerfile > Dockerfile.v_${VERSION}
	docker build -f Dockerfile.v_${VERSION} -t quay.io/geofeedia/${PROJECT}:${VERSION} .
	rm Dockerfile.v_${VERSION}
