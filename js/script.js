window.onscroll = function() {scrollFunction()};
function scrollFunction() 
{
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)
    {
        document.getElementById("nav").style.backgroundColor="white";
        document.getElementById("nav").style.borderBottom="1px solid rgba(165,204,61,255)";
    }
    else{
        document.getElementById("nav").style.backgroundColor="";
        document.getElementById("nav").style.borderBottom="";
    }
}