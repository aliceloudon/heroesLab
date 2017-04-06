var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');

describe('hero', function(){

  var hero
  var food2

  beforeEach(function(){
    hero = new Hero( "Superman", 9001 , "doughnuts" );
    food2 = new Food( "kryptonite" , -1500 );
  })

  it("Has name" , function(){
    assert.strictEqual( "Superman", hero.name );
  })

  it('has health', function(){
    assert.strictEqual(9001, hero.health)
  })

  it("Has favourite food" , function(){
    assert.strictEqual( "doughnuts", hero.favouriteFood);
  })

  it('has empty task list', function(){
    assert.strictEqual(0, hero.tasks.length)
  })

  it('is able to eat food', function(){
    hero.eat(food2)
    assert.strictEqual(7501, hero.health)
  })

})