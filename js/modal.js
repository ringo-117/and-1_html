// 数値
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-container");
  const modalWrapper = document.querySelector(".modal-wrapper");
  const closeBtn = modal.querySelector(".close-btn");
  const bg = document.querySelector(".modal-bg");

  let hasShownModal = false;
  // let scrollY = 0;

  // --- モーダル表示処理 ---
  function openModal() {
    if (!hasShownModal) {
      // 今のスクロール位置を保存
      // scrollY = window.scrollY;

      // スクロールを止める
      // document.body.style.position = 'fixed';
      // document.body.style.top = `-${scrollY}px`;
      // document.body.style.left = '0';
      // document.body.style.right = '0';
      // document.body.classList.add('modal-open');

      modal.classList.add("active");
      modalWrapper.classList.add("active");
      bg.classList.add("active");
      document.body.style.overflow = 'hidden';

      hasShownModal = true;
    }
  }

  // --- モーダル非表示処理 ---
  function closeModal() {
    modal.classList.remove("active");
    modalWrapper.classList.remove("active");
    bg.classList.remove("active");
    document.body.style.overflow = '';

    // スクロール位置を戻す
    // document.body.classList.remove('modal-open');
    // document.body.style.position = '';
    // document.body.style.top = '';
    // document.body.style.left = '';
    // document.body.style.right = '';

    // スクロールを元に戻す（ここが大事）
    // window.scrollTo(0, scrollY);

  }

  // --- 閉じるボタン ---
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  // --- 背景クリックで閉じる ---
  modalWrapper.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      closeModal();
    }
  });

  // --- スクロールでモーダルを開く ---
  window.addEventListener("scroll", () => {
    if (hasShownModal) return;

    const scrollY = window.scrollY;
    const width = window.innerWidth;
    const path = window.location.pathname;

    let triggerDistance = null;

    // ▼ service-video ページ
    if (path.includes("service-web")) {
      if (width < 601) {
        triggerDistance = 1800; // スマホ
      } else if (width < 1024) {
        triggerDistance = 1800; // タブレット
      } else {
        triggerDistance = 1300; // PC
      }
    }

    // ▼ service-web ページ
    else if (path.includes("service-video")) {
      if (width < 601) {
        triggerDistance = 2100;
      } else if (width < 1024) {
        triggerDistance = 2100;
      } else {
        triggerDistance = 1300;
      }
    }

    // ▼ solutions-01 ページ
    else if (path.includes("solutions-01")) {
      if (width < 601) {
        triggerDistance = 2350;
      } else if (width < 1024) {
        triggerDistance = 2500;
      } else {
        triggerDistance = 3500;
      }
    }

    // ▼ solutions-02 ページ
    else if (path.includes("solutions-02")) {
      if (width < 601) {
        triggerDistance = 2500;
      } else if (width < 1024) {
        triggerDistance = 2500;
      } else {
        triggerDistance = 3450;
      }
    }

    // ▼ solutions-03 ページ
    else if (path.includes("solutions-03")) {
      if (width < 601) {
        triggerDistance = 2350;
      } else if (width < 1024) {
        triggerDistance = 2400;
      } else {
        triggerDistance = 3350;
      }
    }

    // ▼ solutions-04 ページ
    else if (path.includes("solutions-04")) {
      if (width < 601) {
        triggerDistance = 2200;
      } else if (width < 1024) {
        triggerDistance = 2080;
      } else {
        triggerDistance = 2800;
      }
    }

    // 条件に一致＆距離を超えたときに開く
    if (triggerDistance !== null && scrollY > triggerDistance) {
      openModal();
    }
  });
});

function setVh() {
  const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);

// 関数呼び出し名を正しく統一
setVh();