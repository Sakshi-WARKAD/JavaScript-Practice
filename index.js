#Promises
Practice of promise in javascript.

const promiseOne = new Promise(function(resolve, reject){
    // Async task
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("promise is consumed");
})


// 2nd promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyns task 2 is completed");
        resolve();
    },1000)
     
}).then(function(){
    console.log("Promise is consumed");
})


// 3rd Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'chai', email:'sakshi@gmail.com'});
    },1000)

}).then(function(user){
    console.log(user);
})

// 4th Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username:"sakshi", email:"sakshi@gmail.com"});
    }
    else{
        reject('ERROR: Js went wrong')
    }
    },1000)

}).then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("its either executed aur rejected"));

