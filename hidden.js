function hiddenWord() {
  // 全てのhidden-button-XXクラスを持つ要素にイベントリスナーを追加
  document.querySelectorAll("[class^='hidden-button-']").forEach(button => {
    button.addEventListener("click", function() {
      // ボタンのクラス名から番号を抽出
      const number = this.className.match(/\d+/)[0];
      // 対応するhidden-word-XX要素を全て選択
      const words = document.querySelectorAll(`.hidden-word-${number}`);
      // 各要素に対してスタイルの切り替えを実施
      words.forEach(word => {
        // もし既にスタイルが適用されていれば削除、そうでなければ追加
        if (word.classList.contains('hidden-word-style')) {
          word.classList.remove('hidden-word-style');
        } else {
          word.classList.add('hidden-word-style');
        }
      });
    });
  });
}

// DOMが読み込まれた後に関数を呼び出し
document.addEventListener('DOMContentLoaded', hiddenWord);
