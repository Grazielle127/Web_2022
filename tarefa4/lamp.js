function light()
{
    var img =document.getElementById("lampada")
 if   (img.src.includes("offlamp.png")){
        img.src="assets/onlamp.png"
        document.body.style.background = 'rgba(255, 0, 127 )';
 }
 else{
        img.src="assets/offlamp.png"
        document.body.style.background = 'rgba(0, 0, 0, 0.85)';
 }
}