var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('hero', function(){

  var hero
  var food
  var food2
  var task
  var task2
  var task3

  beforeEach(function(){
    hero = new Hero( "Superman", 9001 , "doughnuts" );
    food = new Food( "doughnuts" , 500 );
    food2 = new Food( "kryptonite" , -1500 );
    task = new Task( 2, 7 , 1000 , false );
    task2 = new Task( 8, 8 , 3000 , false );
    task3 = new Task( 4, 6 , 2000 , false );
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

  it("eat favurite food = 1.5* value", function(){
    hero.eat(food)
    assert.strictEqual(9751, hero.health)
  })

  it('can add task', function(){
    hero.addTask(task)
    assert.strictEqual(1, hero.tasks.length)
  })

  it('can sort tasks by difficulty', function(){
    hero.addTask(task)
    hero.addTask(task2)
    hero.addTask(task3)
    console.log(task)
    console.log(task2)
    console.log(task3)
    assert.deepEqual( 0 , hero.sortTasks(tasks))

      // [ Task { difficulty: 2, urgency: 7, reward: 1000, completed: false },
      // Task { difficulty: 8, urgency: 8, reward: 3000, completed: false },
      // Task { difficulty: 4, urgency: 6, reward: 2000, completed: false } ] 
  })

})