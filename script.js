let memeTextInput = document.getElementById('text-input');
memeTextInput.addEventListener('keyup', function() {
    let memeTextInputValue = document.getElementById('text-input').value;
    let textParagraph = document.getElementById('meme-text');
    textParagraph.innerText = memeTextInputValue;
})

function fileUpload (event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]); //https://stackoverflow.com/questions/33920409/how-to-get-local-filename-using-url-createobjecturl
}

let previewBoard = document.getElementById('meme-image-container');
function fireBoard() {
    previewBoard.style.border = 'red dashed 3px';
}

function waterBoard() {
    previewBoard.style.border = 'blue double 5px';
}
function earthBoard() {
    previewBoard.style.border = 'green groove 6px';
}

let containerMemesImgs = document.getElementById('container-memes').children;
for (let index = 0; index < containerMemesImgs.length; index += 1) {
    containerMemesImgs[index].addEventListener('click', function(){
        let memeImageMeme = document.getElementById('meme-image');
        memeImageMeme.src = './imgs/' + containerMemesImgs[index].className + '.png';
    })
}