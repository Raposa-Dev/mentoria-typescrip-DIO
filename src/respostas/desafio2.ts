// Como podemos melhorar o esse código usando TS?

interface Employees {
    name: string;
    age: number;
    job: string;
}

let pessoa1 : Employees = {
    name: "",
    age: 0,
    job: ""
};
pessoa1.name = "maria";
pessoa1.age = 29;
pessoa1.job = "atriz";

let pessoa2 : Employees = {
    name: "",
    age: 0,
    job: ""
};
pessoa2.name = "roberto";
pessoa2.age = 19;
pessoa2.job = "Padeiro";

let pessoa3: Employees= {
    name: "laura",
    age: Number("32"),
    job: "Atriz"
};

let pessoa4 : Employees= {
    name: "carlos",
    age: 19,
    job: "padeiro"
}