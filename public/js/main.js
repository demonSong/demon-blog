var index = -1,
	timer = null;


function imagePlayer(){
	var image = document.getElementsByTagName('img');
	index ++;
	if(index == image.length){
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

