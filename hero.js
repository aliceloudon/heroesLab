var Hero = function(name, health, favouriteFood){
  this.name = name
  this.health = health
  this.favouriteFood = favouriteFood
  this.tasks = []
}

Hero.prototype = {
  
  talk: function(){
    return "Hey there, I'm", this.name
  },

  eat: function(food){
    if(food.name === this.favouriteFood){
      this.health = this.health + (food.replenishmentValue*1.5)
    } else {
      this.health = this.health + food.replenishmentValue
    }
    return this.health
  },

  addTask: function(task){
    this.tasks.push(task)
  },

  sortTasks: function(params){
    this.tasks.sort(function (a, b) {
      return a.value - b.value;
    })
  }

}

module.exports = Hero