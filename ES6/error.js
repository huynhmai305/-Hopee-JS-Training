var a = 10;
var b = 0;
try {
    if (b == 0)
    {
        throw ("Lỗi không chia được cho 0");
    }
    else
    {
        var c = a / b;
    }
} catch (e) {
    console.log("Error: " + e);
}