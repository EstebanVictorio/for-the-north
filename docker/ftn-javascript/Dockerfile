FROM node:10.16.0
RUN /bin/bash -c "apt-get update && apt-get install  -y yarn"
WORKDIR /packages/ftn-javascript
RUN /bin/bash -c "yarn install"
COPY ./packages/ftn-javascript /packages/ftn-javascript
RUN /bin/bash -c "cd /packages/ftn-javascript && ls"
RUN /bin/bash -c "yarn install"
CMD ["yarn", "dev"]