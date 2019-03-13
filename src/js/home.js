console.log('hello world');
const notChange = "Leonidas";

let change = "@encinajavier";

function changeName(otherName){
  change = otherName;
}

const getUserAll = new Promise(function(todoOk, todoMal){
  //llaamar a un API
  // setInterval
  setTimeout(function(){
    //Luego de 3 segundos
    todoMal('se acabó el tiempo');
  },3000)
})

const getUser = new Promise(function(todoOk, todoMal){
  //llaamar a un API
  // setInterval
  setTimeout(function(){
    //Luego de 3 segundos
    todoMal('se acabó el tiempo');
  },5000)
})


/* getUser.then(function(){
  console.log("Todo ok");
})
.catch(function(message){
  console.log(message);
}) */


Promise.all([
  getUser,
  getUserAll,
]).then()
 .catch(function(message){
  console.log(message);
 })

$.ajax('https://randomuser.me/api/bdjksbdksadbhj', {
  method:'GET',success: function(data){
    console.log(data);
  },
  error:function(error){
    console.log(error);
  }
})

fetch('https://randomuser.me/api/sdasfdas')//hago que falle
.then(function(response){
// console.log(response);
return response.json();
})
.then(function(user){
  console.log('user',user.results[0].name.first);
}).catch(function(){
  console.log('algo falló');
})