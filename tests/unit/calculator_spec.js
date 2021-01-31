var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('it should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it( 'should concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 786);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(500);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(10);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 1000);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(500);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    
  })


});
