
function writeCookie()
{
    if(document.myform.customer.value=="")
    {
        alert("Please enter name");
        return;
    }
    cookievalue=escape(document.myform.customer.value)+";";
    document.cookie="name="+cookievalue;
    document.write("Setting Cookies: "+"name= "+cookievalue);
}
