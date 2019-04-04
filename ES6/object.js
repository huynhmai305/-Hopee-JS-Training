var obj={a:1,b:2,c:3};
var {a,b,c}=obj;
console.log(a);
console.log(b);
console.log(c);
//kiem tra NaN
var month=5;
if (month<0||month>31)
{
    month=number.NaN;
    console.log("Khong phai thang trong nam");
}
else
{
    console.log("La thang trong nam");
}