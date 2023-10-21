function love() {
    
    const yourName = document.getElementById("Nameone").value.trim();
    const loverName = document.getElementById("Nametwo").value.trim();
    if (yourName === "" || loverName === "") {
      alert("Please enter both names.");
      return;
    }
  
    const lovePercentage = Math.floor(Math.random() * 51) + 50;
  

    document.getElementById("print").textContent = `The love percentage between ${yourName} and ${loverName} is ${lovePercentage}%!`;
  
   
  }
  
// function love()
// {
// var name1=document.getElementById("Nameone").value;
// var name1=document.getElementById("NameTwo").value;
// var random=Math.floor(Math.random()*100);
// document.getElementById("print"),innerHtml=name1+"and"+name2+"="+random+"%"+"of love";
// // prompt("what is your name")
// prompt("what is their  name")
// var loveScore=Math.random()*100;
// loveScore=Math.floor(loveScore)+1;
// alert("your love score is"+loveScore+"%");