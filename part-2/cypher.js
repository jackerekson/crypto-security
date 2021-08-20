const secretMessagesContainer = document.querySelector('#secret_message_container')
const secretMessageForm = document.querySelector('#secret_message_form')

const map = {
    a: "g",
    b: "h",
    c: "i",
    d: "j",
    e: "k",
    f: "l",
    g: "m",
    h: "n",
    i: "o",
    j: "p",
    k: "q",
    l: "r",
    m: "s",
    n: "t",
    o: "u",
    p: "v",
    q: "w",
    r: "x",
    s: "y",
    t: "z",
    u: "a",
    v: "b",
    w: "c",
    x: "d",
    y: "e",
    z: "f",
    " ": '*'
};

let cypher = (key, message) => {
    let encrypt = ''
    for(let i=0;i<message.length;i++){
        for(let prop in key){
            if(message[i]===prop){
                encrypt += key[prop]
            }
        }
    }
    return encrypt
}

let decypher = (key, message) => {
    let decrypt = ''
    for(let i=0;i<string.length;i++){
        for(let prop in key){
            if(message[i]===key[prop]){
                decrypt += prop
            }
        }
    }
    return decrypt
}


const submitHandler = e => {
    e.preventDefault()
    
    const secretMessage = document.querySelector('#secret_message_input')
    
    const shhh = cypher(map, secretMessage)
    
    createCypher(shhh)
    
    secretMessage.value = ''
}

const createCypher = data => {
    const cypherCard = document.createElement('div')
    cypherCard.classList.add('cypher-card')

    cypherCard.innerHTML = `<p class="message">${data}/p>`


    secretMessagesContainer.appendChild(cypherCard)
}

secretMessageForm.addEventListener('submit', submitHandler)
// decypher = decypher(map, cypher)




// console.log(cypher)
// console.log(decypher)
// console.log(string[0])