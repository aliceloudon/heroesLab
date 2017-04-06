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

  it('has an urgency level', function(){
    assert.strictEqual(7, task.urgency)
  })

  it('has an reward', function(){
    assert.strictEqual(1000, task.reward)
  })

  it('has a completion status', function(){
    assert.strictEqual(false, task.completed)
  })

})