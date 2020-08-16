const { response } = require('express');

class Response {
  constructor() {
    const self = this;
    self.status = false;
    self.data = null;
    self.message = null;
    self.token = null;
  }

  set(status = false, message = null, data = null, token = null) {
    const self = this;
    self.status = status;
    self.data = data;
    self.message = message;
    self.token = token;

    return self;
  }
}

module.exports = Response;
