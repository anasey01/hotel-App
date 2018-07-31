//NPM Package to help generate fake data.
var faker = require("faker");
class Hotel{
    constructor(){
        Object.assign(this, {reservation:[], hotelInformation:[], customerInformation:[]});
    }

    getReservations(){
        return this.reservation;
    }

    getReservation(index){
        return this.reservation[index];
    }
    makeHotelReservation(object){
        console.log(`Thank you ${object.reservation.fullname}, your reservation to ${object.reservation.nameOfHotel} was successful!\nCheck-in Date is ${object.reservation.checkInDate}\ncheck-out Date is ${object.reservation.checkOutDate}`);
      this.reservation.push({
            nameOfHotel : object.reservation.nameOfHotel,
            addressOfHotel : {
                street: object.reservation.addressOfHotel.street,
                city: object.reservation.addressOfHotel.city,
                zipcode:object.reservation.addressOfHotel.zipcode,
            },
            typeOfRoom : object.reservation.typeOfRoom,
            numberOfRooms : object.reservation.numberOfRooms,
            fullname : object.reservation.fullname,
            checkInDate: object.reservation.checkInDate,
            checkOutDate : object.reservation.checkOutDate
        })
    }

    makeGymReservation(object){
        (object.reservation.fullname === undefined) ? "You can not use the Gym facility": `Thank you ${object.reservation.fullname}, your Gym reservation was successful!`;
    }

    makeRestaurantReservation(object){
        (object.reservation.fullname === undefined)? "You can not use the resturant facility" : `Thank you ${object.reservation.fullname}, your resturant reservation was successful!`;
    }

    provideHotelInformation(object){
        this.hotelInformation.push({
            nameOfHotel : object.reservation.nameOfHotel,
            addressOfHotel : {
                street: object.reservation.addressOfHotel.street,
                city: object.reservation.addressOfHotel.city,
                zipcode:object.reservation.addressOfHotel.zipcode,
            },
            nameOfHotelMangaer : object.hotelInformation.nameOfHotelMangaer,
            rooms: {
                numberOfRoomsInHotel: Math.floor(Math.random() * 200 + 1),
                type: ["Single", "Delux", "Luxury"],
                price: ["2500","3500","5000"],
            },
            facilities: {
                electricity: object.hotelInformation.facilities.electricity,
                restaurant: object.hotelInformation.facilities.restaurant,
                swimmingPool: object.hotelInformation.facilities.swimmingPool,
                gym: object.hotelInformation.facilities.gym,
                laundry: object.hotelInformation.facilities.laundry,
                conferenceFacility: object.hotelInformation.facilities.conferenceFacility,
            }
        })
    }

    getRoomInformation(index){
        var typeOfRooms = this.hotelInformation[index].rooms.type;
        var numberOfRoomTypes = typeOfRooms.length;
        var prices = this.hotelInformation[index].rooms.price;
        var typeOfRoomsString = "";
        var pricesOfRoomString = "";
        for(var i = 0; i < numberOfRoomTypes; i++){
            if(i === typeOfRooms.length - 1){
                typeOfRoomsString += " and ";
                pricesOfRoomString += " and ";
            }
            typeOfRoomsString += typeOfRooms[i] + " ,";
            pricesOfRoomString += prices[i] + " ,";
        }

        return `${this.hotelInformation[index].nameOfHotel} has ${numberOfRoomTypes} room types which are ${typeOfRoomsString} and Prices ${pricesOfRoomString} respectively`
    }

    getHotelInformation(index){
        return this.hotelInformation[index];
    }




}
/*
    Generating Fake Data using the Faker Package.
*/
var randomName = faker.name.findName();
var randomManagerName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCompany = faker.company.companyName();
var randomAddress = {
    street: faker.address.streetAddress(),
    city : faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country()
}
var randomDate = {
    recent : faker.date.recent(),
    future: faker.date.future()
}
var obj = {
    reservation: {
    nameOfHotel: randomCompany,
    addressOfHotel : {
        street: randomAddress.street,
        city: randomAddress.city,
        zipcode:randomAddress.zipcode,
    },
    typeOfRoom: "Single",
    numberOfRooms: Math.floor(Math.random() * 6 + 1),
    fullname: randomName,
    checkInDate: randomDate.recent,
    checkOutDate: randomDate.future
    },
    hotelInformation : {
        nameOfHotelMangaer: randomManagerName,
        rooms: {
            numberOfRoomsInHotel: Math.floor(Math.random() * 200 + 1),
            type: ["Single", "Delux", "Luxury"],
            price: ["2500","3500","5000"],
        },
        facilities : {
            electricity: true,
            restaurant : true,
            swimmingPool: true,
            gym: true,
            laundry : true,
            conferenceFacility: true
        },
    }
}

var sheraton = new Hotel();
sheraton.makeHotelReservation(obj);
sheraton.makeHotelReservation(obj)
sheraton.makeHotelReservation(obj)
sheraton.provideHotelInformation(obj);
console.log(sheraton.getHotelInformation(0));
sheraton.getRoomInformation(0);
// console.log(sheraton.getReservations());
// console.log(sheraton.getDetails(1));
