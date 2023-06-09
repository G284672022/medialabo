
let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);

let p=document.querySelector('tr#data');
let q=document.querySelector('tr#shousai');
p.style.fontSize="0px";
q.style.fontSize="0px";


function sendRequest() {

  var n=document.getElementById("data");
  var m=document.getElementById("shousai");
  var r=document.getElementById('border');
  r.style.borderColor='black';
  n.style.borderColor='black';
  m.style.borderColor='black';
	n.style.fontSize="16.5px";
  m.style.fontSize="16.5px";

  let i=document.querySelector('input[name="name"]');
  let kunimei=i.value;
  let url;

  if(kunimei==='エジプト'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';}
  if(kunimei==='ロシア'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json';}
  if(kunimei==='南アフリカ'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json';}
  if(kunimei==='中国'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';}
  if(kunimei==='日本'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';}
  if(kunimei==='シンガポール'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json';}
  if(kunimei==='オーストラリア'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';}
  if(kunimei==='イギリス'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';}
  if(kunimei==='フランス'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json';}
  if(kunimei==='ブラジル'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json';}
  if(kunimei==='アメリカ'){
   url ='https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';}
  
  
  axios.get(url)
        .then(showResult)
        .catch(showError); 
}
function showResult(resp){
  let data = resp.data;
  let a =document.querySelector('th#a');
  a.textContent=data.coord.lon;
  let b =document.querySelector('th#b');
  b.textContent=data.coord.lat;
  let c =document.querySelector('th#c');
  c.textContent=data.weather[0].description;
  let d =document.querySelector('th#d');
  d.textContent=data.main.temp_min;
  let e =document.querySelector('th#e');
  e.textContent=data.main.temp_max;
  let f =document.querySelector('th#f');
  f.textContent=data.main.humidity;
  let g =document.querySelector('th#g');
  g.textContent=data.wind.speed;
  let h =document.querySelector('th#h');
  h.textContent=data.wind.deg;
  let i =document.querySelector('th#i');
  i.textContent=data.name;
}
function showError(err) {
  console.log(err);
}
