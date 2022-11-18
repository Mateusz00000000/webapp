function showPanel1(){
    document.getElementById("panel-1").style.display = "block";
}
function showPanel2(){
    document.getElementById("panel-2").style.display = "block";
}
function showPanel3(){
    document.getElementById("panel-3").style.display = "block";
}
function showPanel4(){
    document.getElementById("panel-4").style.display = "block";
}
function showPanel5(){
    document.getElementById("panel-5").style.display = "block";
}



function hide(){
    panels=document.getElementsByClassName("panel");  // Find the elements
        for(var i = 0; i < panels.length; i++){
            panels[i].style.display = "none";    // Change the content
    }

}

   

   //POST-IT NOTE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
   }
   