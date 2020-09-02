const { response } = require('express');

class Response {
  constructor() {
    const self = this;
    self.status = false;
    self.data = null;
    self.message = null;
    self.token = null;
    self.recordsFiltered = null;
    self.recordsTotal = null;
    self.draw = null;
  }

  set(
    status = false,
    message = null,
    data = null,
    token = null,
    recordsFiltered = null,
    recordsTotal = null,
    draw = null
  ) {
    const self = this;
    self.status = status;
    self.data = data;
    self.message = message;
    self.token = token;
    self.recordsFiltered = recordsFiltered;
    self.recordsTotal = recordsTotal;
    self.draw = draw;

    return self;
  }
}

module.exports = Response;
