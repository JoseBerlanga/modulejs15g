// console.log(this)
// console.log(this.alert)

let koder = {
    name:"jorge",
    lastName:"Camarillo",
    age: 30,
    average: [10, 10, 10, 8, 9]
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
}

// koder.getFullName = function () {
//     console.log(this)
//     return `${ this.name } ${ this.lastName } ${this.age}`
// }

// console.log(koder.getAverage())

//console.log(koder.getAverage())
// -> 9.4

koder.getAverage = function () {
    let sum = this.average.reduce((acc, cv) => acc += cv, 0)
    let total = this.average.length
    let av = sum / total
    return av
}

koder.setAveraage = function () {
    this.totalAverage = this.getAverage()
}

koder.setAverage

// Agregar un metodo para calcular el IMC
koder.setGetIMC = function () {
    
}

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    
}


// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function () {
    
}