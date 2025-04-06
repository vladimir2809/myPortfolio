var title;
var count=0;
window.addEventListener("load",()=>{
    title=document.getElementsByClassName("main__title-game")[0];
    setInterval(function(){
        let div=3;
        if ((count % div)==0)
        {
            title.style.color="red";
            //count++;
        }
        else if((count % div)==1)
        {
            title.style.color="green";
        }
        else if((count % div)==2)
        {
            title.style.color="blue";
        }
        if (count>=20) count=0;
        count++;
    },300)
});
// setInterval(function(){
//         if ((count % 2)==0)
//         {
//             title.style.color="red";
//             //count++;
//         }
//         elseif((count % 2)==1)
//         {
//             title.style.color="green";
//         }
//         if (count>=20) count=0;
//         count++;
//     },100)