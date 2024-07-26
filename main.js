var myArr = new Array(3);
for (var i = 1; i < myArr.length; i++) {
    myArr[i] = i * 5;
    console.log(myArr[i]);
}
var people = [
    { name: "Faizan", age: 35 },
    { name: "Usman", age: 30 },
    { name: "Arsalan", age: 18 },
];
//      console.log(people[0].name); // Output: John
people.push({ name: "Sultan", age: 60 });
people.push({ name: "Anayah", age: 2 });
people.push({ name: "Irha", age: 1 });
console.log(people);
console.log(people[4]);
console.log(people[0].name); // Output: John
console.log(people[0]); // Output: { name: "John", age: 30 }
console.log(people[1].name); // Output: Jane
console.log(people[2].age); // Output: 35
var myArry = [
    {
        cktr_name: "Virat Kohli",
        cktr_team: "India",
        cktr_runs: 26000,
    },
    {
        cktr_name: "AB De Villiers",
        cktr_team: "South Africa",
        cktr_runs: 15000,
    },
    {
        cktr_name: "David Warner",
        cktr_team: "Australia",
        cktr_runs: 13000,
    },
];
myArry.forEach(function (_a) {
    var cktr_name = _a.cktr_name, cktr_team = _a.cktr_team, cktr_runs = _a.cktr_runs;
    console.log("Hi, I'm ".concat(cktr_name, " from ").concat(cktr_team, ", with \n                 ").concat(cktr_runs, " runs for my country."));
});
var myArray = [
    {
        cktr_name: "Virat Kohli",
        cktr_team: "India",
        cktr_runs: 26000
    },
    {
        cktr_name: "AB De Villiers",
        cktr_team: "South Africa",
        cktr_runs: 15000
    },
    {
        cktr_name: "David Warner",
        cktr_team: "Australia",
        cktr_runs: 13000
    }
];
myArray.forEach(function (cktr) {
    console.log("Hi, My name is ".concat(cktr.cktr_name, ",\n    I play for ").concat(cktr.cktr_team, " and \n    I've already made ").concat(cktr.cktr_runs, " \n    runs while representing my country."));
});
