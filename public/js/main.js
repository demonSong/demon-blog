var index = -1,
	timer = null;


function imagePlayer(){
	var image = document.getElementsByTagName('img');
	index ++;
	if(index == image.length -1){
		index = 0;
	}
	clearImage(image);
	image[index].style.display = "block";
	
}

function clearImage(image){
	for(var i = 0; i < image.length; i++){
		if(i == index){
			continue;
		}
		image[i].style.display = "none";
	}
}

function startImagePlayer(){
	//实现照片轮播
	clearInterval(timer);
	setInterval(imagePlayer,150);
}

/**********时间辅助函数***********/


function showTime(leftTime,object){
	var day = parseInt(leftTime / (60*60*24));
	var hour = parseInt(leftTime / (60*60) % 24);
	var minute = parseInt(leftTime/60 % 60);
	var second = parseInt(leftTime % 60);
	object.innerHTML = day+'天'+hour+'小时'+minute+'分'+second+'秒';
	setTimeout(showTime,500);
}