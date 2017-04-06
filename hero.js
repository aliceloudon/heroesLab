var Hero = function(name, health, favouriteFood){
  this.name = name
  this.health = health
  this.favouriteFood = favouriteFood
  this.tasks = []
}

Hero.prototype = {
  talk: function(){
    return "Hey there, I'm", this.name
  }
}

module.exports = Hero