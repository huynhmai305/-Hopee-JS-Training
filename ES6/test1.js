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