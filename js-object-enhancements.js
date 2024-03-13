// Question 1
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

// Question 2
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt"
}
    [favoriteNumber] = "This is my favorite!"

// Question 3
const instructor = {
    firstName: 'Colt',
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstName + 'says bye!'
    }
}

//Question 4
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}