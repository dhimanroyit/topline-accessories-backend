class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getStatusCode() {
    return 400;
  }
}

module.exports = GeneralError;
