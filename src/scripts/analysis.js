(()=>{"use strict";window.onload=function(){var t=function(){new Date;var t,e=new Date,l=0,a=0,o=0,n=0,i=0;for(let c=0;c<7;c++){var r=e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear();localStorage.getItem(r)&&(l+=(t=JSON.parse(localStorage.getItem(r))).Left,a+=t.LeanLeft,o+=t.Center,n+=t.LeanRight,i+=t.Right),e.setDate(e.getDate()-1)}return[l,a,o,n,i]}(),e=0;for(let l=0;l<t.length;l++)e+=t[l];var l=0;for(let e=0;e<t.length;e++)l+=t[e]*(e+1);l/=e,document.getElementById("callout_info").innerHTML="You've read "+e+" political articles.",document.getElementById("callout_political").innerHTML=0==e?"You've read no articles.":1<l&&l<1.8?"You tend to read politically left articles.":l<2.6?"You tend to read left-leaning political articles.":l<3.4?"You tend to read politically neutral articles.":l<4.2?"You tend to read right-leaning political articles.":"You tend to read politically right articles.",document.getElementById("callout_topical").innerHTML="Your most frequent topic is ____."}})();