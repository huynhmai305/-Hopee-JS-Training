class someclass
{
    constructor()
    {
        this.name = "Mai";
    }
    arrow()
    {
        return ()=>this.name;
    }
    add(n1,n2)
    {
        return n1 + n2;
    }
}
//class
class subclass extends someclass
{
    add()
    {
        super.add(3,4);
        console.log(super.add(3,4));
        console.log("Lớp con đã kế thừa phương thức của cha")
    }
}
obj=new someclass();
console.log(obj.arrow()())
obj1=new subclass();
obj1.add();