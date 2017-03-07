function VehicleConstructor(name, wheels, passengers, speed) {
    // Private
    var distance_travelled = 0;
    var updateDistanceTravelled = function(self){
        distance_travelled += self.speed;
    }
    var vin = Math.floor(Math.random() * 10000000000000000) // Vin is made up of 17 Characters, Numbers in our Case.

    // Public
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    // Public Methods that access Private Variables
    this.move = function(){
        updateDistanceTravelled(this);
        this.makeNoise();
    }
    this.checkMiles = function(){
        console.log(distance_travelled);
    }

    this.displayVin = function(){
        console.log(vin);
    }
}

// Instance Methods
VehicleConstructor.prototype.makeNoise = function(){
    console.log("Vroom Vroom")
}


// Creating Instances
var bike = new VehicleConstructor("Bike", 2, 1, 15);
bike.makeNoise = function(){
    console.log("Ring Ring");
}


var sedan = new VehicleConstructor("Sedan", 4, 5, 60);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}


var bus = new VehicleConstructor("Bus", 8, 10, 45);
bus.pickUp = function(passengers) {
    bus.passengers += passengers;
}

// Creating Objects 1 Tests
bike.makeNoise();
sedan.makeNoise();
bus.pickUp(10);
console.log(bus.passengers);

// Creating Objects 2 Tests
bus.move();
bus.move();
sedan.move();
bus.checkMiles();
sedan.checkMiles();

// Creating Objects 3 Tests
bus.displayVin();
sedan.displayVin();
bike.displayVin();
