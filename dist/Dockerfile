FROM quay.io/geofeedia/node:5

MAINTAINER Geofeedia <https://geofeedia.com>

ENV \
  SERVICE_VERSION= \
  SERVICE_HOME=/opt/test-context-proxy

ADD test-context-proxy.tar.gz $SERVICE_HOME

WORKDIR $SERVICE_HOME

# calculate IP for k8s service running Sinopia since we are in Drone we don't have 
# access to k8s DNS
RUN apt-get update && apt-get -y --no-install-recommends install dnsutils && \
    export SINOPIA_IP=$(echo $(nslookup sinopia-v1.devel.svc.cluster.local 10.100.0.10 | tail -2 | awk -F ':' '{print $2}')) && \
    export NPM_CONFIG_REGISTRY=http://$(echo $SINOPIA_IP):4873 && \
    npm install --production

COPY docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]