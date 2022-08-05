let memeTextInput = document.getElementById('text-input');
memeTextInput.addEventListener('keyup', function() {
    let memeTextInputValue = document.getElementById('text-input').value;
    let textParagraph = document.getElementById('meme-text');
    textParagraph.innerText = memeTextInputValue;
})