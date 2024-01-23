// 1

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  }

  console.log(checkAge(16));

  //2

  function pow(x,n) {
    let ans = 0;
    for (let i = 0; i<n; i++){
        ans+=x*x
    }
    return ans;
  }

  console.log(pow(3,3));

  //3

  const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );
  
  //4

  let arr = [5, 2, 1, -10, 8];

  arr.sort();

alert( arr );

//5

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = [];
// for (let i=0; i<3; i++){
//   names[i]=users[i].name;
// }

// alert( names ); // Вася, Петя, Маша

//6

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = [];
for (let i=0; i<users.length; i++){
  usersMapped[i]={fullName: users[i].name+" "+users[i].surname, id:i+1}
}

/* ... ваш код ... *//*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

//7

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];

function getAverageAge(users){
  let totalAge = 0;
  let n = users.length;
  for (let i = 0; i < n; i++){
    totalAge += users[i].age;
  }
  return totalAge/n;
}

alert( getAverageAge(arr2) ); // (25 + 30 + 29) / 3 = 28