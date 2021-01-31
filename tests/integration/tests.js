const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  
  //The number buttons should update the display of the running totals. 
  it('should have a working number 1 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  });

  it('should have a working number 2 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have a working number 3 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should have a working number 4 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  });

  it('should have a working number 5 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  });

  it('should have a working number 6 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

  it('should have a working number 7 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  });

  it('should have a working number 8 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  });

  it('should have a working number 9 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  });

  it('should have a working number 0 button', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  });

  //Multiple number button clicks should concatenate.
  it('should concatenate multiple number button clicks' , function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('786')
  });

  //The arithmetical operations should update the display with the result of the operation.
  it('should be able to add', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  });

  it('should be able to subtract', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should be able to multiply', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  });

  it('should be able to divide', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

//Should chain multiple operations together.
it('should be able to chain multiple operations together', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1000')
});

//The output should be as expected for a range of numbers.
it('should be able to return a negative value', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-3')
});

it('should be able to return a decimal value', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.1')
});

it('should be able to return a large value', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10000000')
});

//How should the code behave in exceptional circumstances
//Division by zero should update with error message. 
xit('should return error message when dividing by zero', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Error, number cannot be divided by 0');
});

//Division by zero should update with null. 
it('should return null when dividing by zero', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute(Infinity)).to.eventually.equal(null,'Error, number cannot be divided by 0');
});

//Division by zero should update with infinity. 
it('should return infinity when dividing by zero', function () {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity','Error, number cannot be divided by 0');
});



});
