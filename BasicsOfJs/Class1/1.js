var a=1;
console.log(a);

console.log("Hello, this is 1.js");

var a="Syed";
var b="Rizwan";

console.log(a+" "+b);

const JsUser={
    fullName : "Syed Rizwan",
    position : "SDE"
}

console.log(JsUser);


const firstUser={
    userName:"Arfat",
    "full name":"Syed aamer arfat",
    role:"SDE",
    age:23
}

console.log(firstUser.userName);
console.log(firstUser["full name"]);
console.log(firstUser["userName"]);

//defining symboles

const mySymbol = Symbol();

const user2={
    [mySymbol]:'hello there this is symbole whos values wont collide'
}

console.log(user2[mySymbol]);


//defining function in object

firstUser.greeting =function(){
    console.log('hello there this is function added externally.');
}

console.log(firstUser.greeting());

firstUser.class="5th class";

console.log(firstUser.class);

//accessing dynamic value or object values using interpolation

firstUser.greeting2=function(){
    console.log(`hello this is interpollated value and user name is ${this["full name"]}`);
}

console.log(firstUser.greeting2());