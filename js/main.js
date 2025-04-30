'use strict';

// ハンバーガーメニューとスクロール制御
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector('.btn');
  const header = document.querySelector('.sp-nav .header');
  const container = document.querySelector('.container');
  const logoImg = document.querySelector('.sp-nav .logo-img');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    container.classList.toggle('active');
    header.classList.toggle('active');

    // ロゴ画像の切り替え
    // if (header.classList.contains('active')) {
    //   logoImg.src = 'img/logo_white.png';
    // } else {
    //   logoImg.src = 'img/logo.png';
    // }

    // スクロール制御（あれば）
    const bodyStyle = document.body.style;
    if (bodyStyle.overflow === "hidden") {
      bodyStyle.overflow = "";
      bodyStyle.height = "";
    } else {
      bodyStyle.overflow = "hidden";
      bodyStyle.height = "100%";
    }
  });

	// メニュー内のリンクがクリックされたら、メニューを閉じる
	const navLinks = document.querySelectorAll('.nav-link a');

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			// メニューを閉じる
			btn.classList.remove('active');
			container.classList.remove('active');
			header.classList.remove('active');
			logoImg.src = 'img/logo.png'; // ロゴも戻す

			// スクロール制御を解除
			document.body.style.overflow = '';
			document.body.style.height = '';
		});
	});
});


