/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const FULL_DAY = 35;
const HALF_DAY = 20;

let dailyRate = FULL_DAY;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let bookingDays = document.querySelectorAll('li');

bookingDays.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clicked')) {
            button.classList.remove('clicked');
        } else {
            button.classList.add('clicked');
        }
        calculateCost();
    }
);
}
);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById('clear-button').addEventListener('click', () => {
    bookingDays.forEach(button => {
        button.classList.remove('clicked');
    });
    document.getElementById('calculated-cost').innerHTML= 0; 
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDay = document.getElementById('half');
let fullDay = document.getElementById('full');

halfDay.addEventListener('click', () => {
    dailyRate = HALF_DAY;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    calculateCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.addEventListener('click', () => {
    dailyRate = FULL_DAY;
    halfDay.classList.remove('clicked');
    fullDay.classList.add('clicked');
    calculateCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    let selectedDays = document.querySelectorAll('li.clicked');
    let numberDays = selectedDays.length; 
    let totalCost = numberDays * dailyRate; 
    document.getElementById('calculated-cost').innerHTML = totalCost;
}


