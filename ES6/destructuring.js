let [a,,b]=[1,2,3];
console.log(a);
console.log(b);
//===================================================
nodes = () => { return {lhs: "a", op: "b", rhs: "c"}}
var {op, lhs, rhs} = nodes()

console.log(`\n`+op)
console.log(lhs)
console.log(rhs)
//====================================
node=()=>{return { lh:1,op:3,rh:5}}
var {rh,lh,op}=node();
console.log(`\n`+rh);
console.log(lh);
console.log(op)
//===================================
function m({num: x})
{
    return x
}
function n({num})
{
    return num
}
console.log(`\n`+m({num:30}))
console.log(n({num:5}))
//=================Rút ngắn khai báo mảng====================
function demo(part1,...part2)
{
    console.log(part1);
    console.log(part2);
}
demo(1,2,3,4,5,6,7,8,9);
//=====Hoán đổi giá trị
a=6;
b=7;
[a,b]=[b,a]
console.log(a)
console.log(b)
