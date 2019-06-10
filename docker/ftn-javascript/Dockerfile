FROM node:12.4.0
LABEL maintainer="estebanvictorio@gmail.com"
RUN apt-get update && apt-get install -y yarn
WORKDIR /app
COPY . /app
RUN yarn install
CMD ["yarn","dev"]