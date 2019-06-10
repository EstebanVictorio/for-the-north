FROM node:12.4.0
LABEL maintainer="estebanvictorio@gmail.com"
RUN apt-get update && apt-get install -y yarn
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN /bin/sh -c "yarn install"
CMD ["yarn", "dev"]
