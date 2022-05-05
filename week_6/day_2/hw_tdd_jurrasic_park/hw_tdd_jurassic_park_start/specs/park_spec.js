const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;
    let dinosaur1;
    let dinosaur2;
    let dinosaur3;
    let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur ('triceratops','herbivore',300)
    dinosaur2 = new Dinosaur ('diplodocus','herbivore',250)
    dinosaur3 = new Dinosaur ('velociraptor', 'carnivore', 200)
    dinosaur4 = new Dinosaur ('velociraptor', 'carnivore', 100)
    park = new Park ('Jurassic Park',50, [dinosaur1,dinosaur2])

  })

  it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price' ,function (){
     const actual = park.ticketPrice;
     assert.strictEqual(actual,50)
  });

  it('should have a collection of dinosaurs', function (){
      const actual = park.dinosaurs;
      assert.deepEqual(actual,[dinosaur1,dinosaur2])
  });

  it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur(dinosaur3)
      const actual = park.dinosaurs;
      assert.deepEqual(actual,[dinosaur1,dinosaur2,dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function(){
     park.removeDinosaur(dinosaur2)
     const actual = park.dinosaurs;
     assert.deepEqual(actual,[dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.getMostPopular()
    assert.strictEqual(actual,dinosaur1)
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.dinosaurBySpecies('velociraptor')
    assert.deepStrictEqual(actual,[dinosaur3,dinosaur4])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur3)
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual,750)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur3)
    const actual = park.totalVisitorsPerYear(this.park)
    assert.strictEqual(actual,273750)
  });

  it('should be able to calculate total revenue for one year', function(){;
    park.addDinosaur(dinosaur3)
    const actual = park.totalRevenuePerYear()
    assert.strictEqual(actual,13687500)
  });


});


// it('should have a species', function () {
//   const actual = dinosaur.species;
//   assert.strictEqual(actual, 't-rex');
// });
