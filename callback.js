// Callback- any function that can be passed to another function is known as callback function


function printFirstName(firstName,cb,cb2){
    console.log(firstName)
    cb('singh')
    cb2(20)
}

function printLastName(lastName){
    console.log(lastName)
}

function printAge(age){
 console.log(age)
}


printFirstName('alok',printLastName,printAge)

//calculator with callback function-add ,sub,mul,div

function calc(add,sub,mul,div)
{
    add(10,5)
    sub(30,12)
    mul(21,4)
    div(45,9)
}

function addition(a,b){

    console.log('addition is',a+b)

}

function substraction(c,d){

    console.log('substraction is', c-d)
}

function multiplication(e,f){

console.log('multiplication is',e*f)

}

function division(g,h){

    console.log('division is',g/h)

}

calc(addition,substraction,multiplication,division)




















