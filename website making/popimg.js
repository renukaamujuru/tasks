window.onload=function(){
	var z=document.getElementsByClassName('image');
	for(var i=0;i< z.length;i++)
	{
		var store=z[i];
		store.onclick=function()
		{	
			popupopen(this.src);
		}
	}
}
	function popupopen(r){
	
		document.getElementById('popup').style.display="block";
		
		document.getElementById('popupimg').src=r;
 
	}
	window.onclick=function(e)
	{
		var v =document.getElementById('popup');
		if(e.target == v)
		{
			v.style.display="none";
		}	
	}
	function move(event)
	{
		var img=document.getElementById('popupimg');
		img.style.left=event.clientX+"px";
		img.style.top=event.clientY+"px";
	}