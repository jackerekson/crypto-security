let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6
let g = 7
let h = 8
let i = 9
let j = 10
let k = 11
let l = 12
let m = 13
let n = 14
let o = 15
let p = 16
let q = 17
let r = 18
let s = 19
let t = 20
let u = 21
let v = 22
let w = 23
let x = 24
let y = 25
let z = 26





const string = 'i love cryptography'

const stringarr = string.split('')



const cipher = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'a'){
            arr[i] = 1
        } else if(arr[i] === 'b'){
            arr[i]=2
        }else if(arr[i] === 'c'){
            arr[i]=3
        }else if(arr[i] === 'd'){
            arr[i]=4
        }else if(arr[i] === 'e'){
            arr[i]=5
        }else if(arr[i] === 'f'){
            arr[i]=6
        }else if(arr[i] === 'g'){
            arr[i]=7
        }else if(arr[i] === 'h'){
            arr[i]=8
        }else if(arr[i] === 'i'){
            arr[i]=9
        }else if(arr[i] === 'j'){
            arr[i]=10
        }else if(arr[i] === 'k'){
            arr[i]=11
        }else if(arr[i] === 'l'){
            arr[i]=12
        }else if(arr[i] === 'm'){
            arr[i]=13
        }else if(arr[i] === 'n'){
            arr[i]=14
        }else if(arr[i] === 'o'){
            arr[i]=15
        }else if(arr[i] === 'p'){
            arr[i]=16
        }else if(arr[i] === 'q'){
            arr[i]=17
        }else if(arr[i] === 'r'){
            arr[i]=18
        }else if(arr[i] === 's'){
            arr[i]=19
        }else if(arr[i] === 't'){
            arr[i]=20
        }else if(arr[i] === 'u'){
            arr[i]=21
        }else if(arr[i] === 'v'){
            arr[i]=22
        }else if(arr[i] === 'w'){
            arr[i]=23
        }else if(arr[i] === 'x'){
            arr[i]=24
        }else if(arr[i] === 'y'){
            arr[i]=25
        }else if(arr[i] === 'z'){
            arr[i]=26
        }else if(arr[i] === ' '){
            arr[i] - ' '
        }
        
    }
    return arr
}

const message = cipher(stringarr)

console.log(message)