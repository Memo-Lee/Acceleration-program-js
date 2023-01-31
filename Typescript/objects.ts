interface Point {
    x:number,
    y:number
}
interface Vehicle {
    currentLocation : Point;
    travelTo(point : Point): void;
}
class Taxi implements Vehicle {
    // .. class'a ait özel prop ekleyebiliriz 
    currentLocation : Point;
    travelTo(point : Point): void{
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}
class Bus implements Vehicle {
    // .. class'a ait özel prop ekleyebiliriz 
    currentLocation : Point;
    travelTo(point : Point): void {
        console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

// Objects
let taxi_1:Taxi = new Taxi();
taxi_1.travelTo({x:11,y:12});
taxi_1.currentLocation = {x:123,y:456};

let taxi_2 = new Taxi();
taxi_2.travelTo({x:5,y:6});
taxi_2.currentLocation = {x:2,y:5};

let bus_1 = new Bus();

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
