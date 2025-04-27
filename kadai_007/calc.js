//変数numに1以上の正の数を代入する
let num = 30;

//変数numの値3の倍数、5の倍数、3の倍数且つ5の倍数、それ以外で出力する文字列を変更する
if(num % 3 == 0 && num % 5 == 0){
  console.log('3と5の倍数です');
} else if(num % 3 == 0){
  console.log('3の倍数です');
} else if(num % 5 == 0){
  console.log('5の倍数です');
} else {
  console.log(num);
}