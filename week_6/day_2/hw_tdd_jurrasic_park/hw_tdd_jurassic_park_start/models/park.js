const Dinosaur = require('./dinosaur')

const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = dinosaurs
  }
  

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const dinosaurToRemove = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(dinosaurToRemove,1)
}


Park.prototype.getMostPopular = function(){
    this.dinosaurs= this.dinosaurs.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay);{
    return this.dinosaurs[0]}
}

Park.prototype.dinosaurBySpecies = function(chosenSpecies){
    let allOfSpecies= []

    for (const dinosaur of this.dinosaurs){
        if(dinosaur.species == chosenSpecies){
            allOfSpecies.push(dinosaur)}}

    return allOfSpecies;
}

Park.prototype.totalVisitorsPerDay = function(){
    let visitors = 0

    for (const dinosaur of this.dinosaurs){
        visitors += dinosaur.guestsAttractedPerDay
    }
    return visitors
}

Park.prototype.totalVisitorsPerYear = function(){
    return this.totalVisitorsPerDay() * 365
}

Park.prototype.totalRevenuePerYear = function(park){
    let revenue = this.totalVisitorsPerYear() * park.ticketPrice
    return revenue
}
module.exports = Park