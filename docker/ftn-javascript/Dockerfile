FROM node:12.4.0
WORKDIR /ftn-javascript
RUN /bin/bash -c "apt-get update && apt-get install  -y yarn"
RUN /bin/bash -c "cd /ftn-javascript && yarn install"
COPY ./packages/ftn-javascript /ftn-javascript
RUN /bin/bash -c "cd /ftn-javascript && ls && cat package.json"
CMD ["yarn", "dev"]