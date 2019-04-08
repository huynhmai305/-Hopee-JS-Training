//callback
console.log(`\n==Example callback==\n`)
function notify(fnSms,fnEmail)
{
        console.log("Starting notification process..");
        fnSms();
        fnEmail();
}
notify(function(){console.log("sms send..")},
function(){console.log("email send..")});
console.log("End script..")
//async callback bất đồng bộ
console.log(`\n==Example async callback==\n`)
function notifyAll(fnSms,fnEmail)
{
    setTimeout(function(){
        console.log("Starting notification process..");
        fnSms();
        fnEmail();
    },2000)
}
notifyAll(function(){console.log("sms send..")},
function(){console.log("email send..")});
console.log("End script..")
//promise
console.log(`\n==Example promises==\n`)
function getSum(n1,n2)
{
    verify=function(){return n1>=0 && n2>=0 ;}
    promise=new Promise(function(resolve,reject){
        if(verify())
        { resolve(n1+n2);}
        reject(Error("Error..."));
        
    });
    return promise;
}
getSum(3,4)
.then(function(result){
    console.log(result);
    return getSum(30,5);
}, 
function(error){
    console.log(error);
})
.then(function(result){
    console.log(result);
    return getSum(19,97);
},
function(error){
    console.log( error);
})
.then(function(result){
    console.log(result);
}, 
function(error){
    console.log(error);
})

