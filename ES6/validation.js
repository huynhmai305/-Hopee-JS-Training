function validation()
{
    if(document.myform.ten.value=="")
    {
        alert("Chưa nhập tên");
        document.myform.ten.value.focus();
        return false;
    }
    if(document.myform.email.value=="")
    {
        alert("Chưa nhập email");
        document.myform.email.value.focus();
        return false;
    }
    if(document.myform.sdt.value=="")
    {
        alert("Chưa nhập số điện thoại");
        document.myform.sdt.value.focus();
        return false;
    }
    if(document.myform.quoctich.value=="")
    {
        alert("Chưa chọn quốc tịch");
        document.myform.quoctich.value.focus();
        return false;
    }
    return (true);
}