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
    this.health = this.health + food.replenishmentValue
    return this.health
  }

}

module.exports = Hero