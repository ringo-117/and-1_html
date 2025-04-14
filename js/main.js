'use strict';

// ハンバーガーメニューとスクロール制御
document.addEventListener("DOMContentLoaded", function () {
	const btn = document.querySelector('.btn');
	// if (!btn) {
	// 	console.warn('btnが見つかりませんでした');
	// 	return;
	// }
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
		logoImg.classList.toggle('active');


		// ボディのスクロール制御
		const bodyStyle = document.body.style;
		if (bodyStyle.overflow === "hidden") {
			bodyStyle.overflow = "";
			bodyStyle.height = "";

			// ヘッダーのスタイルを元に戻す
			// header.style.backgroundColor = "#ffffff";
			// headerLogo.style.color = "#333333"; // 元の色
			logoImg.src = "/img/logo.png"; // 黒いロゴ
		} else {
			bodyStyle.overflow = "hidden";
			bodyStyle.height = "100%";

			// ヘッダーのスタイルを変更
			// header.style.backgroundColor = "#4689E3";
			// headerLogo.style.color = "#ffffff";
			header.style.backgroundColor = "#4cd5cc";
			logoImg.src = logoImg.src.includes("logo_white.png")
			? "img/logo.png"
			: "img/logo_white.png";
		}
	});
});


// document.addEventListener("DOMContentLoaded", function () {
// 	const btn = document.querySelector('.btn');
// 	const container = document.querySelector('.container');
// 	const header = document.querySelector('.header');
// 	const logoImg = document.querySelector('.logo-img');
// 	const headerLogo = document.querySelector('.header-logo');
// 	const navContact = document.querySelector('.nav-contact');

// 	if (!btn || !container || !header || !logoImg) {
// 		console.warn('要素が取得できていないものがあります：', {
// 			btn, container, header, logoImg
// 		});
// 		return;
// 	}

// 	btn.addEventListener('click', () => {
// 		console.log('ハンバーガーボタンクリック！');
// 		btn.classList.toggle('active');
// 		container.classList.toggle('active');
// 		header.classList.toggle('active');
// 		headerLogo?.classList.toggle('active');
// 		navContact?.classList.toggle('active');

// 		const bodyStyle = document.body.style;

// 		if (bodyStyle.overflow === "hidden") {
// 			console.log('閉じる処理中...');
// 			bodyStyle.overflow = "";
// 			bodyStyle.height = "";
// 			logoImg.src = "img/logo.png"; // 黒いロゴ
// 			header.style.backgroundColor = ""; // 元に戻す
// 		} else {
// 			console.log('開く処理中...');
// 			bodyStyle.overflow = "hidden";
// 			bodyStyle.height = "100%";
// 			logoImg.src = "img/logo_white.png"; // 白いロゴ
// 			header.style.backgroundColor = "#4cd5cc"; // 背景色を変更
// 		}
// 	});
// });

