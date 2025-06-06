const promise = new Promise((resolve, reject) => {
    var name = 'João'

    if (name != 1) {
        resolve('promessa concluida')
    }else {
        reject('promessa nao cumprida')
    }
})

promise.then((data)=>{
    return data.toUpperCase()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

const host='https://dattebayo-api.onrender.com'
fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept:"application/json"
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{

    
    for (let count = 0; count < data.id.length; count++){
         console.log(data.id[count].toUpperCase())
    }
   




}).catch((error)=>{
    console.log.apply(error)
})


