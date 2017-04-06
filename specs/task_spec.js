var assert = require('assert');
var Task = require('../task.js');

describe('task', function(){

  var task

  beforeEach(function(){
    task = new Task( 2, 7 , 1000 , false );
  })

  it('has a difficulty', function(){
    assert.strictEqual(2, task.difficulty)
  })

})