// JavaScript to toggle the visibility of the example experiences

const toggleButton = document.getElementById('toggle-example');
const exampleList = document.getElementById('example-list');

toggleButton.addEventListener('click', () => {
    if (exampleList.style.display === 'none' || exampleList.style.display === '') {
        exampleList.style.display = 'block';
    } else {
        exampleList.style.display = 'none';
    }
});