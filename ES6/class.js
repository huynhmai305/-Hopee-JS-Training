class Polygon
{
    constructor(height, width)
    {
        this.height=height;
        this.width=width;
    }
    area()
    {
        console.log("Polygon's area is: "+this.height*this.width);
    }
}
var obj=new Polygon(20,50);
obj.area();