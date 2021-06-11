var header_color=document.getElementById("head")
var hlf=document.getElementById("HLIid")
var body=document.getElementById("body")
var term1=document.getElementById("term1")
var term2=document.getElementById("term2")
var term3=document.getElementById("term3")
var button1=document.getElementById("b1")
var button2=document.getElementById("b2")
var link1=document.getElementById("l1")
var link2=document.getElementById("l2")
var link3=document.getElementById("l3")
var img=document.getElementById("img")
var i=1;
img.addEventListener('mouseenter',()=>{
    i=1;
    img.src="./images/pic1.jpg"
    img.classList.add("rotate-90-cw")
    img.classList.remove("rotate-90-ccw")
})
img.addEventListener('click',()=>{
    i++;
    if(i>17)
    {
        i=1;
    }
    if(i==15||i==17)
    {
        img.src=`./images/pic${i}.png`

    }else{
        img.src=`./images/pic${i}.jpg`
    }
})
img.addEventListener('mouseleave',()=>{
    i=1;
    img.src="./images/pic1.jpg"
    img.classList.remove("rotate-90-cw")
    img.classList.add("rotate-90-ccw")
})
link1.addEventListener('mouseenter',()=>{
    link1.classList.add("scale-up-center")
    link1.classList.remove("scale-down-center")
})
link1.addEventListener('mouseleave',()=>{
    link1.classList.remove("scale-up-center")
    link1.classList.add("scale-down-center")
})
link2.addEventListener('mouseenter',()=>{
    link2.classList.add("scale-up-center")
    link2.classList.remove("scale-down-center")
})
link2.addEventListener('mouseleave',()=>{
    link2.classList.remove("scale-up-center")
    link2.classList.add("scale-down-center")
})
link3.addEventListener('mouseenter',()=>{
    link3.classList.add("scale-up-center")
    link3.classList.remove("scale-down-center")
})
link3.addEventListener('mouseleave',()=>{
    link3.classList.remove("scale-up-center")
    link3.classList.add("scale-down-center")
})
button1.addEventListener('mouseenter',()=>{
    button1.classList.add("vibrate-1")
    body.style.backgroundColor="#C0FDFF"
    button1.style.color="grey"
})
button1.addEventListener('mouseleave',()=>{
    button1.classList.remove("vibrate-1")
    body.style.backgroundColor="#FFEEDD";
    button1.style.color="white"
})
button2.addEventListener('mouseenter',()=>{
    button2.classList.add("vibrate-1")
    body.style.backgroundColor="#FCF6B1"
    button2.style.color="grey"
})
button2.addEventListener('mouseleave',()=>{
    button2.classList.remove("vibrate-1")
    body.style.backgroundColor="#C0FDFF"
    button2.style.color="white"
})
term1.addEventListener("mouseenter",()=>{
    term1.style.fontSize="60px"
    body.style.background="#FCF6B1"
})
term1.addEventListener("mouseleave",()=>{
    term1.style.fontSize="40px"
    body.style.background="#FFEEDD"
})
term2.addEventListener("mouseenter",()=>{
    term2.style.fontSize="60px"
    body.style.background="#F7EBFD"
})
term2.addEventListener("mouseleave",()=>{
    term2.style.fontSize="40px"
    body.style.background="#FFEEDD"
})
term3.addEventListener("mouseenter",()=>{
    term3.style.fontSize="60px"
    body.style.background="#0A0908"
})
term3.addEventListener("mouseleave",()=>{
    term3.style.fontSize="40px"
    body.style.background="#FFEEDD"
})
hlf.addEventListener("mouseenter",()=>{
    header_color.style.backgroundColor="#6A00F4";
})
hlf.addEventListener("mouseleave",()=>{
    header_color.style.backgroundColor="#80FFDB";
})