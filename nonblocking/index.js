// 時間の掛かりそうな処理はコールバック関数で実装する

// non blocking => world (one second) hello

// setTimeout(function() {
//   console.log('hello');
// }, 1000);
// console.log('world');

// blocking => (one second) world

var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log('world');
