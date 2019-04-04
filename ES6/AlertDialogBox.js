function falert()
{
    alert("This is a warning!!!");
    document.write("Warning!!!");
}
function fconfirm()
{
    var val=confirm("Ban co thich Panda khong?");
    if (val == true)
        {
            document.write("Cung so thich");
            return true;
        }
    else 
    {
        document.write("Khong cung so thich");
        return false;
    }
}
function fprompt()
{
var m=prompt("Ban thich loai hoa nao?","Hoa bi ngan");
document.write("Loai hoa ban yeu thich la: "+m);
}