const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit',function(e){
//     alert('SUBMITTED THE FORM');
//     e.preventDefault(); // Allows us to capture data in the form and manipulate it

//     console.log('cc',creditCardInput.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggieSelect',veggieSelect.value);

// });

// THE INPUT EVENT

// const formData = {};

// creditCardInput.addEventListener('input',(e) =>{
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input',(e) =>{
//     console.log('VEGGIE',e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input',(e) =>{
//     console.log('CHECKBOX', e);
//     FormData['agreeToTerms'] = e.target.checked;
// })

const formData = {};

for(let input of [creditCardInput,termsCheckbox,veggieSelect]){
    input.addEventListener('input',({target}) =>{
        // console.log(e.target.name);
        const {name,type,value,checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);

    })
}


// THE CHANGE EVENT
// Typing in the input box doesn't change the event until you lose focus
for(let input of [creditCardInput,termsCheckbox,veggieSelect]){
    input.addEventListener('change',({target}) =>{
        // console.log(e.target.name);
        const {name,type,value,checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);

    })
}