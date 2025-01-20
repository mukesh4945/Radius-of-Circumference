const pi=3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("text").value
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("mhh1").textContent = `Circumference is = ${circumference+"cm"}`;
}