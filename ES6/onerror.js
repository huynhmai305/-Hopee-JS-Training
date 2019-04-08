window.onerror = function(msg,url,line)
{
    document.write(`Message: `+msg);
    document.write(`\nUrl: `+url);
    document.write(`\nLine: `+line);
}
/*function MyError(msg)
{
    this.name="Customer error";
    this.msg=msg||"Default error message";
}
try {
    throw new MyError();
} catch (e) {
    console.log(e.name);
    console.log(e.msg);
}
try {
   throw new MyError("Printing error") 
} catch (e) {
    console.log(e.name);
    console.log(e.msg);
}*/