// function mode() {
//     document.body.classList.toggle("dark-theme");
//     const mode=document.getElementById("darkLight");
//     mode.setAttribute("src","./../media/sun.png")
// }
const fromCurr=document.getElementById('from').value;
const ammount=document.getElementById('setAmm').value;
const get=document.getElementById('getValue');
const span=document.createElement('span');
span.textContent=ammount+fromCurr;
get.appendChild(span);
$("#mode").click(function () {
  var src =
    $(this).attr("src") === "./media/moon.png"
      ? "./../media/sun.png"
      : "./media/moon.png";
  $(this).attr("src", src);
  $("body").toggleClass("dark-theme");
  if ($(".filt").css("filter") === "none") {
    $(".filt").css("filter", "invert()");
  } else {
    $('.filt').css('filter','unset');
  }
  $('.ftl').css('filter','unset');
});
// var changelly = new Changelly('SHA256', ' RSA-SHA256');
// changelly.getCurrencies(function(result) {
//   console.log(result);
//});
const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
modulusLength: 2048,
publicKeyEncoding: {
  type: 'pkcs1',
  format: 'der'
},
privateKeyEncoding: {
  type: 'pkcs8',
  format: 'der'
}
});

console.log('The private key is: ', privateKey.toString('hex'));
console.log();
console.log('The public key is: ', publicKey.toString('base64'));
console.log();
console.log('Api Key Base64 is: ', crypto.createHash('sha256').update(publicKey).digest('base64'));

