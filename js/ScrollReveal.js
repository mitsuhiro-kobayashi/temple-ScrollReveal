// 読み込んだライブラリからScrollRevealという関数を呼び出し、reveal()メソッドを使う
// 参考サイト：https://liginc.co.jp/500530

ScrollReveal().reveal('.box', {
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: true,   // 何回もアニメーション表示するか
});