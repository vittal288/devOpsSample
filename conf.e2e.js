exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/spec.js'],
  baseUrl:'http://127.0.0.1:8000',
  //chromeOnly: true
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }]
  // capabilities: {
  //   browserName: 'firefox'
  // }
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 800000
  // }
};