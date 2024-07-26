let myArr: number[] = new Array(3)

for (var i = 1; i < myArr.length; i++) {
    myArr[i] = i * 5
    console.log(myArr[i])
}



interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
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



type Cricketer = {
    cktr_name: string;
    cktr_team: string;
    cktr_runs: number;
};

type ArrayOf<T> = T[];

const myArry: ArrayOf<Cricketer> = [
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

myArry.forEach(({ cktr_name, cktr_team, cktr_runs }) => {
    console.log(`Hi, I'm ${cktr_name} from ${cktr_team}, with 
                 ${cktr_runs} runs for my country.`);
});




let myArray: Array<{
    cktr_name: string,
    cktr_team: string, cktr_runs: number
}> = [
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

myArray.forEach((cktr) => {
    console.log(`Hi, My name is ${cktr.cktr_name},
    I play for ${cktr.cktr_team} and 
    I've already made ${cktr.cktr_runs} 
    runs while representing my country.`)
})


