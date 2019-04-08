"use strict"
function* rainbow()
{
    yield "red"
    yield "yellow"
    yield "orange"

}
for(let color of rainbow())
{
    console.log(color)
}
function test()
{
    console.log(`hello world`);
}
test();
export default test;