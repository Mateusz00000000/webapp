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

   


//JACKIE'S NOTES
if (localStorage["monday"]) {
    var monday = localStorage["monday"];
    document.getElementById("monday").value = monday;
  } 
  function saveMonday() {
    var monday = document.getElementById("monday").value;
    localStorage.setItem("monday", monday);
  }
  
  if (localStorage["tuesday"]) {
    var tuesday = localStorage["tuesday"];
    document.getElementById("tuesday").value = tuesday;
  }
  function saveTuesday() {
    var tuesday = document.getElementById("tuesday").value;
    localStorage.setItem("tuesday", tuesday);
  }
  
  if (localStorage["wednesday"]) {
    var wednesday = localStorage["wednesday"];
    document.getElementById("wednesday").value = wednesday;
  }
  function saveWednesday() {
    var wednesday = document.getElementById("wednesday").value;
    localStorage.setItem("wednesday", wednesday);
  }
  
  if (localStorage["thursday"]) {
    var thursday = localStorage["thursday"];
    document.getElementById("thursday").value = thursday;
  }
  function saveThursday() {
    var thursday = document.getElementById("thursday").value;
    localStorage.setItem("thursday", thursday);
  }
  
  if (localStorage["friday"]) {
    var friday = localStorage["friday"];
    document.getElementById("friday").value = friday;
  }
  function saveFriday() {
    var friday = document.getElementById("friday").value;
    localStorage.setItem("friday", friday);
  }


   