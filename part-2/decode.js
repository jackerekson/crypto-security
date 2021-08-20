const codedMessagesContainer = document.querySelector('section')
const codedMessageForm = document.querySelector('form')

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

let decypher = (key, message) => {
    let decrypt = ''
    for(let i=0;i<message.length;i++){
        for(let prop in key){
            if(message[i]===key[prop]){
                decrypt += prop
            }
        }
    }
    return decrypt
}

const decode = e => {
    e.preventDefault()
    
    let codedMessage = document.querySelector('#coded_message_input')
    codedMessage = codedMessage.value
    const say = decypher(map, codedMessage)
    createCypher(say)
    codedMessage.value = ''
}


const createCypher = data => {
    const cypherCard = document.createElement('div')
    cypherCard.classList.add('cypher-card')

    cypherCard.innerHTML = `<p class="message">${data}</p>`


    codedMessagesContainer.appendChild(cypherCard)
}
console.log(codedMessagesContainer)
    codedMessageForm.addEventListener('submit', decode)