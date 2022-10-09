var a = "2"
var b = Number(a)
console.log(a)//?
console.log(b)
a==b//?
a===b//?

var  c = true
var d = false
if(c&&d){
    console.log(true)
}else{
    console.log(false)
}

var accessory_price = 9.99
var bank_balance = 302.13
var amount = 99.99
amount = amount*2

//can we afford the extra purchase?
if(amount<bank_balance){
    console.log("I will take the accessory")
    amount=amount+accessory_price
} 
//otherwise
else {
    console.log("No thanks")
}

switch(amount<bank_balance){
    case amount<bank_balance:  
    //code block
    2
        break;
    case amount>bank_balance: 
    4
    //code block
        break; 
    default:
    //code block

}


//Loops
for(let i=0; i<5; i+=2){
    //block code to be executed
    i 
}