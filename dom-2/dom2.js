const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border= '2px solid black';
    section.style.margin='20px'
    section.style.borderRadius='20px'
    section.style.padding='10px'
    section.style.backgroundColor='gray'
    section.style.color='white'
    
    
}
const goodproducts = document.getElementById('goodProduct');
goodproducts.style.display='grid'
goodproducts.style.gap='20px'
goodproducts.style.gridTemplateColumns='100px 100px 100px '
goodproducts.style.justifyContent='space-around'

let products =goodproducts.childNodes[3]
console.log(products)



const boxes = document.querySelectorAll('#box');
for(let box of boxes){
    box.style.height='100px'
    box.style.width='100px'
    box.style.border='2px solid blue'
}
const headers = document.getElementsByTagName('header')
for(let header of headers){
    header.style.display='flex'
    header.style.alignItems='center'
    header.style.justifyContent='space-between'
    header.style.backgroundColor='black';
    header.style.color='white'
    header.style.padding='0 20px'
}
const lists = document.getElementsByTagName('li')
 for(let list of lists){
    list.style.listStyle='none'  

 }
 const ankors = document.getElementsByTagName('a');
 for(let ankor of ankors){
    ankor.style.color='white'
    ankor.style.textDecoration='none'
 }
const hlink = document.getElementById('headerlink');
hlink.style.display='flex'
hlink.style.gap='20px'

const sections1 = document.getElementById('good')
sections1.classList.add('large-text');
sections1.classList.remove('text-center')

