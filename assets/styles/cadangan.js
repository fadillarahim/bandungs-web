const fName = prompt("Please Your First Name !!!");
const lName = prompt("Please Your Last Name !!!");
const language = prompt("and what is your native language")

const dataInputan ={
    nama:{
        first:fName,
        last:lName
    },
    bahasa: language

};

if(dataInputan.bahasa == "english"){
    alert(`Hallo Good Morning ${dataInputan.nama.first} ${dataInputan.nama.last}`)
}else if(dataInputan.bahasa == "indonesia"){
    alert(`Halo Selamat Pagi ${dataInputan.nama.first} ${dataInputan.nama.last}`)
}else{
    alert(`So Glad to Meet You ${dataInputan.nama.first} ${dataInputan.nama.last}`)
}