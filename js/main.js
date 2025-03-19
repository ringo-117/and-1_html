'use strict';

// ハンバーガーメニューとスクロール制御
document.addEventListener("DOMContentLoaded", function () {
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');
	const header = document.querySelector('.header');
	const logoImg = document.querySelector('.logo-img');
	const headerLogo = document.querySelector('.header-logo');
	const navContact = document.querySelector('.nav-contact');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');
		header.classList.toggle('active');
		headerLogo.classList.toggle('active');
		navContact.classList.toggle('active');


		// ボディのスクロール制御
		const bodyStyle = document.body.style;
		if (bodyStyle.overflow === "hidden") {
			bodyStyle.overflow = "";
			bodyStyle.height = "";

			// ヘッダーのスタイルを元に戻す
			// header.style.backgroundColor = "#ffffff";
			// headerLogo.style.color = "#333333"; // 元の色
			logoImg.src = "/images/logo.png"; // 黒いロゴ
		} else {
			bodyStyle.overflow = "hidden";
			bodyStyle.height = "100%";

			// ヘッダーのスタイルを変更
			// header.style.backgroundColor = "#4689E3";
			// headerLogo.style.color = "#ffffff";
			logoImg.src = "/images/logo_white.png"; // 白いロゴ
		}
	});
});



// メニューリンクをクリック時、メニューを閉じる
$('#nav_list a[href]').on('click', function() {
	if (window.innerWidth <= 1081) { // SPサイズの時のみ実行
		$('.btn').trigger('click');
	}
});

// $('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


