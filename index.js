function myFunction() {
    var x = document.getElementById("dropup")
    var y = document.getElementById("arrow-down")

    var share = document.getElementById("share_icon")
    if(x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";

        share.style.backgroundColor = "hsl(217, 19%, 35%)";
        share.style.color = "hsl(210, 46%, 95%)";


    }
    else {
        x.style.display = "none";
        y.style.display = "none";
        
        share.style.backgroundColor = "hsl(210, 46%, 95%)";
        share.style.color = "hsl(217, 19%, 35%)";
    }
}