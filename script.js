let memeTextInput = document.getElementById('text-input');
memeTextInput.addEventListener('keyup', function() {
    let memeTextInputValue = document.getElementById('text-input').value;
    let textParagraph = document.getElementById('meme-text');
    textParagraph.innerText = memeTextInputValue;
})

let memeImage = document.getElementById('meme-insert');
memeImage.addEventListener('change', function(){
    console.log(memeImage);
    let container = document.getElementById('meme-image-container');
    container.style.background = memeImage.value;
})

function fileUpload (event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]); //https://stackoverflow.com/questions/33920409/how-to-get-local-filename-using-url-createobjecturl

}