function filterfn() {
    var input, filter, ul, line, a, i, j;
    var chap1=0;
    input = document.getElementById("myInput");
    //filter = input.value.toUpperCase(); //So all text to Upper Case
    
    filter = input.value; //For high-lighting text
    
    ul = document.getElementById("myUL");
    line = ul.getElementsByTagName("div");
    
    for (i = 0; i < line.length; i++) {
        content = line[i].getElementsByClassName("filter")[0];
        if (content.innerHTML.lastIndexOf(filter) > -1) { //Find if a formula contain the text
            
            
    text = line[i].getElementsByClassName("body");
            var once=0;
    for (j = 0; j < text.length; j++) {
        if( once==0) {
        text[j].innerHTML= text[j].innerHTML.replace("<span style=\"color:red;\">", ""); //Remove previous effect
        text[j].innerHTML= text[j].innerHTML.replace("</span>", "");
        
            text[j].innerHTML= text[j].innerHTML.replace(filter, "<span style=\"color:red;\">"+filter+"</span>");
        }
    }
            
            line[i].style.display = "";
            
            
        } else {
            
          line[i].style.display = "none";
            
           // if (i==1) {chap1++};
           // if (i==2) {chap1++};
           // if (chap1!=2) {line[0].style.display = "";} else {line[0].style.display = "none";}
            
            

        }
    }
}
    
function filtervalue(letter) {
    
    if (letter>0) {
    if (letter==3) {
        text = "γ"
    } else if (letter==4)  {
        text = "δ"
    } else if (letter==5)  {
        text = "ε"
    } else if (letter==8)  {
        text = "θ"
    } else if (letter==16)  {
        text = "π"
    } else if (letter==18)  {
        text = "σ"
    } else if (letter==21)  {
        text = "Φ"
    } else if (letter==24)  {
        text = "ω"
    } 
    input = document.getElementById("myInput");
    input.value = text;
    } else {
    input = document.getElementById("myInput");
    input.value = "";
    }
    
filterfn()
}

function detailMode() {
    
    var i;
    var check = document.getElementById("myCheck").checked
    
    if (check == true) {
    var detail = document.getElementsByClassName("detailOff");
    var dlenght = detail.length; //substitution will change length n-1
        
    for (i = 0; i < dlenght; i++) {
    detail[0].className = "detail"; //substitution will make all index to 0
    }
    } else {
    var detail = document.getElementsByClassName("detail")
    var dlenght = detail.length;
        
    for (i = 0; i < dlenght; i++) {
    detail[0].className = "detailOff";
    }
    }
}
