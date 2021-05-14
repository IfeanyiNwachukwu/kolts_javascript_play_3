const colors = ['red','orange','yellow','green','purple',
'indigo','violet'];
const container = document.querySelector('#boxes');

// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);

//     box.addEventListener('click',BoxClick);
// }

// function BoxClick(){
//     console.log('CLICKED A BOX');
// }
// const printColor = function(){
//     console.log(this.style.backgroundColor);
// }
// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);

//     box.addEventListener('click',printColor);
// }

// const changeColor = function(){
//     const h1 = document.querySelector('h1');
//     h1.style.color = this.style.backgroundColor;
// }
// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild(box);

//     box.addEventListener('click',changeColor);
// }

// THE EVENT OBJECT
const changeColor = function(event){
    const h1 = document.querySelector('h1');
    console.log(event);
    h1.style.color = this.style.backgroundColor;
}
for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);

    box.addEventListener('click',changeColor);
}

document.body.addEventListener('keypress', function(e){
    console.log(e);
});



