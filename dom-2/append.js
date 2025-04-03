const headerlinkss = document.getElementById('headerlink');

const li =document.createElement('li')
li.innerText='Sign in'
li.style.listStyle='none'

headerlinkss.appendChild(li)

const maincontainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='My food list'
section.appendChild(h1);


const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText='biryani';
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText='Borhani'
ul.appendChild(li2)

const li3 =document.createElement('li');
li3.innerText='Salad'
ul.appendChild(li3)

const li4 =document.createElement('li');
li4.innerText='Kabap'
ul.appendChild(li4)


section.appendChild(ul)


maincontainer.appendChild(section)


//set inner html
const sectionDress = document.createElement('section');
sectionDress.innerHTML=`
    <h1>My Dress Section</h1>
    <ul>
        <li>T-Shirt</li>
        <li>Lungi</li>
        <li>Sando gangi</li>
        <li>Shirt</li>
    </ul>
`

maincontainer.appendChild(sectionDress)