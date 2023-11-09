document.getElementById("change").addEventListener("click",change)

function change(){
    const xhr = new XMLHttpRequest() // objemizi oluşturuyoruz
    xhr.open("GET", "https://apigw.vakifbank.com.tr:8443",true) // bağlantıyı açıyoruz
}