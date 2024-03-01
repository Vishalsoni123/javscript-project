 const form = document.querySelector('form')
const fruit = document.querySelectorAll('.fruit')
const fruits = document.querySelector('.fruits')


/*function fruitAdd(event){
    event.preventDefault()
    fruitToAdd = document.getElementById('fruit-to-add')
    console.log(fruitToAdd)
    newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + "<button class = 'delete-btn'>x</button>"
    fruits.appendChild(newLi)

}*/

addFruitForm.addEventListener('submit',function(event){
    event.preventDefault()
    fruitToAdd = document.getElementById('fruit-to-add')
    newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + "<button class = 'delete-btn'>x</button>"
    fruits.appendChild(newLi)
})



fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('delete-btn'))
    {
        const fruitToDelete = event.target.parentElement
    
        fruits.removeChild(fruitToDelete)

    }

})

search=document.getElementById('search');                 // filter function

search.addEventListener("keyup",function(event){
const textentered=event.target.value.toLowerCase();

const fruitItems=document.getElementsByClassName('fruit')
for(let i=0;i<fruitItems.length;i++)
{
    const currentfruitText=fruitItems[i].firstChild.textContent.toLowerCase();
    if(currentfruitText.indexOf(textentered)===-1)
    {
        fruitItems[i].style.display='none';
    }
    else
    {
        fruitItems[i].style.display='flex';
    }

}
})