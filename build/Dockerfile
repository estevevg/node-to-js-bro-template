FROM node:11.7.0-alpine
# Create app directory
RUN mkdir -p /usr/src

WORKDIR /usr/src

# Install app dependencies
COPY ./src/. /usr/src/
RUN npm install
RUN npm install -g gulp@4.0.2
RUN gulp transpile

RUN node app/dist/app.es5.js
