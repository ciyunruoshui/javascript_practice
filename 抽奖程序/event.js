var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'];
var timer=null;
var flag=0;
window.onload=function(){
	var start=document.getElementById('btn1');
    var stop=document.getElementById('btn2');
    //鼠标开始
    start.onclick=startfun;
    //鼠标结束
    stop.onclick=stopfun;
    //键盘事件
    document.onkeyup=function(event){
    		event=event || window.event;
    	if(event.keyCode==13){
    		if(flag==0){
    		   startfun();
    		   flag=1;
    		}else{
    			stopfun();
    			flag=0;
    		}
    	}
    }
}
function startfun()
{
 var start=document.getElementById('btn1');
 var text=document.getElementById('text');
     clearInterval(timer);
     timer=setInterval(function(){
     var random=Math.floor(Math.random()*data.length);
     text.innerHTML=data[random];
        },50);
     start.style.background="#999";
}
function stopfun(){
     var start=document.getElementById('btn1');
     var stop=document.getElementById('btn2');
     start.style.background="blue";
     clearInterval(timer);
}
