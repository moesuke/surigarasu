function suriWord() {
  // 全てのsuri-button-XXクラスを持つ要素にイベントリスナーを追加
  document.querySelectorAll("[class^='suri-button-']").forEach(button => {
    button.addEventListener("click", function() {
      // ボタンのクラス名から番号を抽出
      const number = this.className.match(/\d+/)[0];
      // 対応するsuri-target-XX要素を全て選択
      const words = document.querySelectorAll(`.suri-target-${number}`);
      // 各要素に対してスタイルの切り替えを実施
      words.forEach(word => {
        // もし既にスタイルが適用されていれば削除、そうでなければ追加
        if (word.classList.contains('suri-style')) {
          word.classList.remove('suri-style');
        } else {
          word.classList.add('suri-style');
        }
      });
    });
  });
}

// DOMが読み込まれた後に関数を呼び出し
document.addEventListener('DOMContentLoaded', suriWord);
