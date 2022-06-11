let x = "fog";
function first() {
  console.log(x);
}
x = "dog";
function s() {
  let x = "log";
  first();
}
s();
