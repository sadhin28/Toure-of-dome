console.log('Js dom separet File')
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