// JavaScript Document

//<!--

function mailme()
{
ul=document.location.href;
pth1=ul.split("/");
if(ul.indexOf(".html")!=-1)
{
pth2=pth1[pth1.length-1];
}else
{
pth2=pth1[pth1.length-2];
}
//alert(pth2);
document.location.href="mailto:basu@desertsafaridubai.com,sales@desertsafaridubai.com?subject=Mail Through desertsafaridubai website from "+pth2+" page";
}
// -->