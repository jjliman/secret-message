// is a normal <button></button> considered a submit in a form?
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('input');
    console.log(input.value);
});