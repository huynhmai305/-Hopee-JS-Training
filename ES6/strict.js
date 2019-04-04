"use strict"
function test()
{
    var num=100
    console.log("value of num in test() is: "+num)
    {
        console.log("inner block begins")
        let num=30
        console.log("value is: "+num)
    }
}
test()