FROM node:argon
# latest LTS

# Create app directory..
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
# now most commands run from within there.

# Install app dependencies
RUN npm install webpack-dev-server -g && \
 npm install

CMD [ "npm", "start" ]
