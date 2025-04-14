
// // 　MOVIE
// document.querySelectorAll(".modal-open-movie").forEach
// ((video) => {
// 	video.onclick = () => {
// 		document.querySelector(".modal-movie").style.
// 		display = "block";
// 		document.querySelector(".modal-movie iframe").style.
// 		display = "block";
// 		document.querySelector(".modal-movie iframe").play();
// 	}
// });
// const span = (document.querySelector(".modal-movie span").onclick = () => {
// 	document.querySelector(".modal-movie").style.
// 	display = "none";
// 	document.querySelector(".modal-movie iframe").style.
// 	display = "none";
// 	document.querySelector(".modal-movie iframe").style.
// 	autoplay = "0";
// 	document.querySelector(".modal-movie iframe").pause();
// });
// const div = (document.querySelector(".modal-movie div").onclick = () => {
// 	document.querySelector(".modal-movie").style.
// 	display = "none";
// 	document.querySelector(".modal-movie iframe").style.
// 	display = "none";
// 	document.querySelector(".modal-movie iframe").style.
// 	autoplay = "0";
// 	document.querySelector(".modal-movie iframe").pause();
// });


document.querySelectorAll(".movie.sp").forEach(movieContainer => {
  const openBtn = movieContainer.querySelector(".modal-open-movie");
  const modal = movieContainer.querySelector(".modal-movie");
  const iframe = modal.querySelector("iframe");
  const closeBtn = modal.querySelector("span");
  const bg = modal.querySelector(".movie-bg");

  // モーダルを開く
  openBtn.onclick = () => {
    modal.style.display = "block";
    iframe.style.display = "block";

    // iframe.srcの元URLをきれいにしてからautoplayを追加
    let baseSrc = iframe.dataset.src || iframe.src;
    baseSrc = baseSrc.replace("?autoplay=1", "").replace("&autoplay=1", "");

    iframe.src = ""; // リセット（Chrome対応）
    iframe.src = baseSrc + (baseSrc.includes("?") ? "&" : "?") + "autoplay=1";
  };

  // モーダルを閉じる（×ボタン）
  closeBtn.onclick = () => {
    modal.style.display = "none";
    iframe.style.display = "none";
    const src = iframe.src;
    iframe.src = ""; // リセット
    iframe.src = src.replace("&autoplay=1", ""); // autoplay削除
  };

  // モーダルを閉じる（背景クリック）
  bg.onclick = () => {
    modal.style.display = "none";
    iframe.style.display = "none";
    const src = iframe.src;
    iframe.src = "";
    iframe.src = src.replace("&autoplay=1", "");
  };
});
