console.log('こんにちは');
 let x;
 x=3;
 x=x+1;
 x;

 
     let cnt = 0;            // グローバル変数
function foo(s) {
    console.log(s);
    cnt = cnt + 1;      // グローバル変数に1加える
}

foo('おはよう');
foo('こんにちは');
console.log(cnt);       // 2を出力