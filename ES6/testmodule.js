const hello="hello world";
var ch=function(name){
    if(name)
    {
        console.log("hello"+name);
    }
    else console.log("hello");
}
export {hello,ch}
export default {ch}