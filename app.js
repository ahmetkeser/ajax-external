document.getElementById("change").addEventListener("click",change)

function change(){
    const xhr = new XMLHttpRequest() // objemizi oluşturuyoruz
    xhr.open("GET", "https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT") // bağlantıyı açıyoruz
    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText)
            const price =response.price
            const emount = Number(document.getElementById("amount").value)
            document.getElementById("tl").value=emount*price
            

        }
    }
    xhr.send()
} 

