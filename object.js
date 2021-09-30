const Person = {
    firstName: "Fadil",
    lastName: "Malik",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 53,
    height: 172,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
    },
    needDiet: function() {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight)
            return (
                "you need more protein, need more " + (weightIdeal - this.weight) + "Kg"
            );
        else if (weightIdeal + 5 < this.weight)
            return (
                "you need a mayo diet, need reduce weight: " + (this.weight - weightIdeal) + "Kg"
            );
        return "you are in a good shape";
    },
};

console.log(Person.fullName());
console.log("Weight Ideal is:", Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ["Jawa Barat", "DKI Jakarta", "Jawa Tengah"],
//         city: ["Bogor", "Bandung", "Surabaya", "Malang"],
//     },
//     MY: {},
// };

// console.log(countries?.TH?.province ?? "Not Found"); 
// '?' adalah optional chaining dan '?? "" ' adalah null coalescing operator