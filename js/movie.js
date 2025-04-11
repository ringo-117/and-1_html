
// 　MOVIE
document.querySelectorAll(".modal-open-movie").forEach
((video) => {
	video.onclick = () => {
		document.querySelector(".modal-movie").style.
		display = "block";
		document.querySelector(".modal-movie iframe").style.
		display = "block";
		document.querySelector(".modal-movie iframe").play();
	}
});
const span = (document.querySelector(".modal-movie span").onclick = () => {
	document.querySelector(".modal-movie").style.
	display = "none";
	document.querySelector(".modal-movie iframe").style.
	display = "none";
	document.querySelector(".modal-movie iframe").style.
	autoplay = "0";
	document.querySelector(".modal-movie iframe").pause();
});
const div = (document.querySelector(".modal-movie div").onclick = () => {
	document.querySelector(".modal-movie").style.
	display = "none";
	document.querySelector(".modal-movie iframe").style.
	display = "none";
	document.querySelector(".modal-movie iframe").style.
	autoplay = "0";
	document.querySelector(".modal-movie iframe").pause();
});

