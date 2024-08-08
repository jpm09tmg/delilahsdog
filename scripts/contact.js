// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById('contact-page').addEventListener('submit', () => {
    document.getElementById('contact-page').innerHTML= ' ';

    const para = document.createElement('p');
    const message = document.createTextNode("Thank you for your message"); 
    para.style.fontSize = '24px'; 
    para.appendChild(message);

    const newPage = document.getElementById('contact-page');
    newPage.appendChild(para);
});