//step 1: addEventListener
document.getElementById('btnClick').addEventListener('click', function(){
    //step 2:get the coment inside the text area
    const coments = document.getElementById('new-coment');
    const newcoment = coments.value
    //set the comment inside the commentbox
    const comentbox = document.getElementById('comentBox')
    const p =document.createElement('p');
    p.innerText=newcoment.value;
    comentbox.appendChild(p);
    //step 4: clean coment box
    coments.value=''
})