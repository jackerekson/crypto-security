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
    h: "*",
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
    " ": 'n'
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

const encode = e => {
    e.preventDefault()
    
    let secretMessage = document.querySelector('#secret_message_input')
    secretMessage = secretMessage.value
    const shhh = cypher(map, secretMessage)
    addCypher(shhh)
    secretMessage.value = ''
}

const decode = e => {
    e.preventDefault()
    
    let codedMessage = document.querySelector('#coded_message_input')
    codedMessage = codedMessage.value
    const say = decypher(map, codedMessage)
    createCypher(say)
    codedMessage.value = ''
}


const addCypher = data => {
    const cypherCard = document.createElement('div')
    cypherCard.classList.add('cypher-card')

    cypherCard.innerHTML = `<p class="message">${data}</p>`


    secretMessagesContainer.appendChild(cypherCard)
}
    secretMessageForm.addEventListener('submit', encode)
