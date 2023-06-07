// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu=1;

if(kaisu===1){
let p=document.querySelector('p#number');
let q=document.querySelector('p#result');
p.style.fontSize="0px";
q.style.fontSize="0px";
}

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

function greeting() {
  var n=document.getElementById("number");
  var m=document.getElementById("result");
	n.style.fontSize="16.5px";
  m.style.fontSize="16.5px";
}

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  var n=document.getElementById("number");
  var m=document.getElementById("result");
	n.style.fontSize="16.5px";
  m.style.fontSize="16.5px";
  
  let i=document.querySelector('input[name="shimei"]');
  let shimei=i.value;
  let yoso=Number(i.value);

  let l =document.querySelector('span#answer');
  l.textContent = yoso;
  let s =document.querySelector('span#kaisu');
  s.textContent=kaisu;
  let r =document.querySelector('p#result');
  
  if(kotae===yoso){
    if(kaisu<=2){
      r.textContent='正解です.おめでとう!';
      kaisu=kaisu+4;
    }else if(kaisu===3){
      r.textContent='正解です.おめでとう!';
      kaisu++;
    }else if(kaisu>=4){
      r.textContent='答えは '+kotae+' でした．すでにゲームは終わっています';
      kaisu++;
    }
  }else if(kotae!=yoso){
    if(kaisu<=2){
      if(kotae<yoso){
        r.textContent='まちがい．答えはもっと小さいですよ';
      }
      if(kotae>yoso){
        r.textContent='まちがい．答えはもっと大きいですよ';
      }
    }else if(kaisu===3){
      r.textContent='まちがい．残念でした答えは '+kotae+' です．';
    }else{
      r.textContent='答えは '+kotae+' でした．すでにゲームは終わっています';
    }
    kaisu++;
  }  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}