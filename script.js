var searchbox=document.querySelector(".search-box")
var searchbtn=document.querySelector(".search-btn")
var cancelbtn=document.querySelector(".cancel-btn")
var searchinput=document.querySelector("input")
var searchdata=document.querySelector(".search-data")
function searchBtn(){
    searchbox.classList.add("active")
    searchinput.classList.add("active")
    searchbtn.classList.add("active")
    cancelbtn.classList.add("active")
    if(searchinput.value !=""){
        var value=searchinput.value;
        searchdata.innerHTML="You just typed" + " " + value;
    }
    else{
        searchdata.innerHTML=""
    }
}
function cancelBtn(){
    searchbox.classList.remove("active")
    searchinput.classList.remove("active")
    searchbtn.classList.remove("active")
    cancelbtn.classList.remove("active")
    searchinput.value=""
}