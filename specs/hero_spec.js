var assert = require('assert');
var Hero = require('../hero.js');

describe('hero', function(){

  var hero

  beforeEach(function(){
    hero = new Hero( "Superman", 9001 , "doughnuts" );
  })

  it("Has name" , function(){
    assert.strictEqual( hero.name , "Superman" );
  })

  it('has health', function(){
    assert.strictEqual(hero.health, 9001)
  })

  it("Has favourite food" , function(){
    assert.strictEqual(hero.favouriteFood, "doughnuts" );
  })

})