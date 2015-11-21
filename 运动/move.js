var m={
	getStyle:function(obj,attr){
        if(obj.currentStyle){
        	return obj.currentStyle[attr];
        }else{
        	return getComputedStyle(obj,false)[attr];
        }
	},
	moveevent:function(obj,json,fn){
		 clearInterval(obj.timer);
		
		 obj.timer=setInterval(function(){
			for(var j in json){
			//当前属性的值
			var icur=0;
			if(j=="opacity"){
			        icur=parseFloat(m.getStyle(obj,j))*100;
			}else{
			        icur=parseInt(m.getStyle(obj,j));
		    }
			//速度
			var speed=(json[j]-icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//停止判断和运动
			if(icur==json[j]){
				clearInterval(obj.timer);
				if(fn)
					{fn();}
			}else{
				if(j=="opacity"){
					obj.style.opacity=(icur+speed)/100;
				}else{
				obj.style[j]=icur+speed+"px";
			    }
			}
		}},30);
    }
}