function* takip (){
    let i = 1
    while(true){
        
        yield i++
    }
}

const sayac =takip()
console.log(sayac.next().value)
console.log(sayac.next().value)
console.log(sayac.next().value)
console.log(sayac.next().value)
console.log(sayac.next().value)
console.log(sayac.next().value)
console.log(sayac.next().value)
function gel(a,b,c){
    arguments[2]="new value"
    console.log(arguments[0])
        console.log(arguments[1])
            console.log(arguments[2])
}
gel(5,6,7)
    