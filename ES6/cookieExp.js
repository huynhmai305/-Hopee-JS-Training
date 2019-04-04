function WriteCookie()
{
    var now = new Date();
    now.setMonth (now.getMonth + 1);
    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name = " + cookievalue ;
    document.cookie = "exprise = " + now.toUTCString + ";";
    document.write ("Setting cookie: " + "name = " + cookievalue );

}