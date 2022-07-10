const btn = document.querySelector('button');

const names = ['Andy', 'Marry', 'Rob', 'Anna', 'Silvia', 'Agness', 'Jack', 'Matt'];
const prefixes = ['I think', 'In my opinion', 'I am absolutely sure', 'I have no doubts', 'I would suggest'];

const nameSelect = () =>{
let nameIndex = Math.floor(Math.random() * names.length);
let prefixIndex = Math.floor(Math.random() * prefixes.length);

document.querySelector('div').innerHTML = `${prefixes[prefixIndex]}, that you should name your baby <strong>${names[nameIndex]}</strong>`
}

btn.addEventListener('click', nameSelect)