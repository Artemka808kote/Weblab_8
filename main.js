let images = ['url(img/img_1.jpg)', 'url(img/img_2.jpg)', 'url(img/img_3.jpg)', 'url(img/img_4.jpg)', 'url(img/img_5.jpg)'];

let btn_1 = document.getElementById('button_1');
let btn_2 = document.getElementById('button_2');
let imgIndex = 0;
btn_1.onclick = function () {
	if (imgIndex == 0)
		imgIndex = images.length;
	imgIndex--;
	document.body.style.backgroundImage = images[imgIndex];
}
btn_2.onclick = function () {
	imgIndex++;
	if (imgIndex == images.length)
		imgIndex = images.length % 1;
	document.body.style.backgroundImage = images[imgIndex];
}