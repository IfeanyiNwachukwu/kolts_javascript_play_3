// BASIC STRUCTURE OF EVENTS

// the thing           event type           the  code to run
//button               click                change the color
//input                hits return          get search results
//image                mouseover/hover      display the image caption

// 2 WAYS NOT TO ADD EVENTS

// -- Adding an event on the html document like an inline style --- OnEventName

// const btn = document.querySelector('#clicker');

// btn.onclick = function (){
//     console.log('YOU CLICKED ME! GO AWAY')

// }
// One reason why they are not good ways to add events is that the event is added like a property and in the case where multiple events are added. previouly added events are overwritten.

// btn.ondblclick = function (){
//     console.log('DOUBLE CLICK!')
// }

// Note : both approaches are not the recommended way to add events


// THE CORRECT WAY TO ADD EVENTS  -- addeventlistener
const btn = document.querySelector('#clicker');

btn.addEventListener('click',() =>{
    alert('You clicked Me',);
});

btn.addEventListener('mouseover',() =>{
    btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout',() =>{
    btn.innerText = 'CLICK ME';
});
window.addEventListener('scroll',()=>{
    console.log('STOP SCROLLING');
});

// ADDING EVENTS ON MULTIPLE ELEMENTS



