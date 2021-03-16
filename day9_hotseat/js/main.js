
function myFunction() {
    var x = document.getElementById("nav");
    if (x.classname === "navbar"){
        x.classname += "responsible";
    } else {
        x.classname = "navbar";
    }
}