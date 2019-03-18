document.querySelector("#image-form").addEventListener('submit', (e) => {
    e.preventDefault();
    
    const image = document.querySelector('.image');

    const img = document.createElement('img');
    const imgPath = document.querySelector("#imageInputFile").files[0];
    img.width = 350;
    img.height = 300;
    img.className = 'rounded';
    img.src = `images/${imgPath.name}`;

    // Check image file 
    if(imgPath.type !== 'image/jpeg' && imgPath.type !== 'image/png' && imgPath.type !== 'image/jpeg') {
        displayMessage('Not An Image File', 'danger');
        clearField();
    } else {
        image.appendChild(img);
    
        displayMessage('Accept', 'success');
        clearField();

        // Fade away image after 3 seconds
        setTimeout(() => image.removeChild(img), 3300);
    }
});

const displayMessage = (message, className) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert alert-${className}`;
    messageDiv.appendChild(document.createTextNode(message));

    const section = document.querySelector("section");
    const form = document.querySelector('#image-form');

    section.insertBefore(messageDiv, form);

    setTimeout(() => document.querySelector('.alert').remove(), 2000);
}

const clearField = () => {
    document.querySelector("#imageInputFile").value = '';
}