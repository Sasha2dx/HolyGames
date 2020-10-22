let imgs = document.getElementsByClassName("selflink");
for (let i = 0; i < imgs.length; i++){
    let img = imgs[i];
    img.onclick = function (){
        window.open(img.src,'_blank');
    }
}