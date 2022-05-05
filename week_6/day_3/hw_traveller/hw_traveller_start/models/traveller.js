const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result =this.journeys.filter((journey) => {
    return journey.transport === transport
  })
    return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) =>{
    return journey.distance > minDistance
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce ((runningTotal, journey) => {
    return runningTotal + journey.distance
  },0)

    return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey)=>{
    return journey.transport
  })
    const uniqueTransportArray = [... new Set(result)]
    return uniqueTransportArray
};


module.exports = Traveller;

// Cinema.prototype.allFilmsLength = function(){
//   const total = this.films.reduce ((runningTotal, film) =>{
//       return runningTotal + film.length
//   },0)
  
  
//   return total

// }