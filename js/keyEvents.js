const input = document.querySelector('#username');

input.addEventListener('keydown', function(e){
    console.log('KEYDOWN!!!')
});

input.addEventListener('keyup', function(e){
    console.log('KEYUP!!!')
});

input.addEventListener('keypress', function(e){
    console.log('KEYPRESS!!!')
});

// For an event to be called a keypress event, there has to be a character change

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        if(!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
})

