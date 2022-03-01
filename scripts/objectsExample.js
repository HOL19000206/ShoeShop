//Demonstrating different objects and their methods

console.log('Example of objects');

//define and object
//const means it will not change 
//let means it will
//var is another way to define let

const car = {
    make:"Kia",
    model:"venga",
    engine:"1.4",
    fuel:"diesel",
    colour:"Blue",
    price: 1000.01
}

//print car
console.log(car);
//print car details individually 
console.log(car.make)


//array of objects
const cars = [
    {
        make:"Kia",
        model:"venga",
        engine:"1.4",
        fuel:"diesel",
        colour:"Grey",
        price: 1000.01
    },
    {
        make:"Ford",
        model:"Focus ST",
        engine:"1.8",
        fuel:"Super Unleaded",
        colour:"Blue",
        price: 7000
    },
    {
        make:"Nissan",
        model:"Micra",
        engine:"1.4",
        fuel:"Unleaded",
        colour:"Silver",
        price: 10.99
    }
]

//print single property from array
console.log(cars[1].model)

//search for a specific element
function SearchObject(search){
    const result = cars.find(car => car.make == search);
    return result;
}

function VagueSearch(search){
    const result = cars.filter(items => items.name.contains(search));
    console.log(result)
    return result
}