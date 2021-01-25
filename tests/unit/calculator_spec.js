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


  it('it can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it( 'can concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 786);
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(500);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(10);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 1000);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(500);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    
  })


});
