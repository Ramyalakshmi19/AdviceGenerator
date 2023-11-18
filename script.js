function reload()
{
    window.location.reload();
}
async function loadAdvice()
{
    const response=await fetch("https://api.adviceslip.com/advice");
    const data=await response.json();
    console.log(data);
    console.log(data.slip.advice);
    document.getElementById("advice").innerHTML=data.slip.advice;
}
loadAdvice()