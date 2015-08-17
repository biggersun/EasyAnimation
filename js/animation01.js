window.onload = function(){
	var item = document.getElementsByName('item');
	var son = document.getElementsByName('son');
	for (var i = 0; i < item.length; i++) {
		item[i].timer = null;
		item[i].onmouseover=function(){
			startMove(this,390);
		};
		item[i].onmouseout=function(){
			startMove(this,140);
		};
	}
	for (var j = 0; j < item.length; j++) {
		son[j].timer = null;
		son[j].onmouseover=function(){
			startMove(this,440);
		};
		son[j].onmouseout=function(){
			startMove(this,150);
		};
	}
};
//var timer = null;
function startMove(obj,iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = (iTarget-obj.offsetWidth)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if (obj.offsetWidth==iTarget) {
			clearInterval(obj.timer);
		} else{
			obj.style.width=obj.offsetWidth+speed+'px';
		}
	}, 30);
}
