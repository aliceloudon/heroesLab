var assert = require("assert");
var Food = require("../food.js");
 
describe("food" , function(){

  var food;
  var food2;

  beforeEach(function(){
    food = new Food( "doughnuts" , 500 );
    food2 = new Food( "kryptonite" , -1500 );
  })

  it('should have a name', function(){
    assert.strictEqual("doughnuts", food.name)
  })

  it('should have a replenishment value', function(){
    assert.strictEqual(500, food.replenishmentValue)
  })


}) 