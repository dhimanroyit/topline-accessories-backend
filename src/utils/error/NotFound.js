const GeneralError = require('./GeneralError');

class NotFound extends GeneralError {
  constructor(message) {
    super(message);
    this.name = 'NotFound';
  }

  getStatusCode() {
    return 404;
  }
}

module.exports = NotFound;
