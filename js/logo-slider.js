// logo-slider.js
// const track = document.getElementById('logoTrack');

// // スクロール用の速度 (px / 秒)
// const SPEED = 100; // 100px per second

// // トラックの中身を2回複製して、スムーズなループを作る
// track.innerHTML += track.innerHTML;

// // 現在のX位置
// let positionX = 0;

// // 元の1セット分の幅（あとで計算）
// let trackWidth = 0;

// window.addEventListener('load', () => {
//   // 1セット分の幅を取得
//   trackWidth = track.offsetWidth;

//   // 毎フレーム動かす
//   let lastTime = performance.now();
//   function animate(time) {
//     const delta = (time - lastTime) / 1000; // 秒に変換
//     lastTime = time;

//     // 左に移動
//     positionX -= SPEED * delta;

//     // 元の位置に戻す
//     if (Math.abs(positionX) >= trackWidth) {
//       positionX = 0;
//     }

//     track.style.transform = `translateX(${positionX}px)`;
//     requestAnimationFrame(animate);
//   }

//   requestAnimationFrame(animate);
// });


const track = document.getElementById('logoTrack');

// スクロール用の速度 (px / 秒)
const SPEED = 100; // 100px per second

// 元の1セット分の幅（複製前に取得！）
let trackWidth = 0;

// load時に実行
window.addEventListener('load', () => {
  // 複製前にクローンを取って、幅を取得
  const originalWidth = track.scrollWidth;

  // 元の幅を保存
  trackWidth = originalWidth;

  // 複製
  track.innerHTML += track.innerHTML;

  // 現在のX位置
  let positionX = 0;
  let lastTime = performance.now();

  function animate(time) {
    const delta = (time - lastTime) / 1000; // 秒に変換
    lastTime = time;

    // 左に移動
    positionX -= SPEED * delta;

    // 元の位置に戻す
    if (Math.abs(positionX) >= trackWidth) {
      positionX = 0;
    }

    track.style.transform = `translateX(${positionX}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});

