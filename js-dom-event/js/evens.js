console.log('Js dom separet File')
//add onclick function on the html element
function makeRed(){
            document.body.style.backgroundColor='red'
}

const grayButton=document.getElementById('make-gray') ;
grayButton.onclick=makegray;
function makegray(){
    document.body.style.backgroundColor='gray';
}       

const purpleButton=document.getElementById('make-purple')
purpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple'
}

const blueButton=document.getElementById('make-blue');
blueButton.onclick= makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
 document.body.style.backgroundColor='pink'
}

//another
const makeGreen =document.getElementById('make-green')
makeGreen.addEventListener('click',function makegreen(){
    document.body.style.backgroundColor='green'
})

//important we will use some times
document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})