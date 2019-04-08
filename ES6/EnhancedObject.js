let obj1={
    toString:function(){return "object 1";}
}
var handler=()=>"handler";
var obj2={
    __proto__:obj1,//thiết lập prototype
    handler,//viết tắt của 'handler:handler', gọi lại hàm handler ở trên
    String(){//phương thức
        return "obj2 and "+ super.toString();
    },
    ["prop_"+(()=>24)()]:24,
};
console.log(obj1.toString());
console.log(handler());
console.log(obj2.String());
console.log(obj2.prop_24);