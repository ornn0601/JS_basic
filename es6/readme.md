# ES6  

(문제1) 다음의 코드를 es6 문법을 이용하여 재작성 하시오  
```js
let name="noona's fruit store";
let fruits = ["banana","apple","mango"];
let location="Seoul";

let store = { name:name, fruits:fruits, location:location }
console.log(store);
  
  
// 답
let store = {name, fruits, address};
console.log(store);
```  

(문제2) es6 문법을 이용하여 다음과 같이 출력하시오.  
```js
"제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다"

// 답
console.log(`제 가게 이름은 ${name}입니다. 위치는 ${location}에 있습니다`);
```  
  
  
(문제3) 다음 코드를 Destructoring을 이용하여 해결하시오  
```js
function calculate(obj) {    // 함수 안을 바꾸시오
    return a+b+c;
}
calculate({a:1,b:2,c:3});

// 답
function calculate(obj) {
    // 함수 안을 바꾸시오
    let {a, b, c} = obj;
    return a + b + c;
}

calculate({a:1, b:2, c:3});
```  
  

(문제4) 다음 문제에 정답이 true가 나오게 하시오.
```js
let name="noona store";
let fruits = ["banana","apple","mango"];
let address={
  country:"Korea",
  city:"Seoul"
};

function findStore(obj) {
  return name="noona store" && city == "Seoul";
};
console.log(findStore({name,fruits,address}));

// 답
// 오브젝트 안에 오브젝트는 address:{city} 다음과 같이 선택이 가능하다
function findStore(obj) {
  let { name, address:{city} } = obj;
  return name=="noona store" && city=="Seoul";
}

console.log(findStore({name,fruits,address}));

```  
  

(문제5) 다음과같이 프린트되게 코드를 바꾸시오.
```js
function getNumber(){
    let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
    return {first,third,forth}
}
console.log(getNumber()); //  결과값 { first: 1, third: 3, forth: 4 }

// 답
// 어레이에 건너뛰고싶은 부분이 있다면 , 를 이용해 그자리를 비울 수 있다.
function getNumber() {
    let array = [1, 2, 3, 4, 5, 6];
    let [first,,third,forth] = array;
    
    return {first, third, forth};
}

console.log(getNumber());

```  
  

(문제6) 다음의 결과가 true가 되게 하시오
```js
function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "February" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar()); // 여기를 바꾸시오

// 답
console.log(getCalendar("January", "February", "March"));
```  
  

(문제7) 두 어레이들중 최소값을 찾는 함수를 완성하시오
```js
function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min() // 여기를 바꾸시오
}
console.log(getMinimum());

// 답
function getMinimum(){
    let a= [45,23,78];
    let b = [54,11,9];
    return Math.min(...a,...b);
}

console.log(getMinimum());
```  
  

(문제8) 다음의 함수를 화살표 함수로 바꾸시오
```js
function sumNumber() {
  // 여기서부터 바꾸시오
  const sum = function (a, b) {
    return a + b;
  };
  return sum(40, 10);
}

// 답
function sumNumber() {
  // 여기서부터 바꾸시오 
  const sum = (a, b)=> a + b;
  return sum(40, 10);
}
```  
  

(문제9) 다음함수를 화살표 함수로 바꾸시오
```js
function sumNumber() {
  //여기를 바꾸시오
  return addNumber(1)(2)(3);
  function addNumber(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
}
console.log(sumNumber());

//  답
function sumNumber() {
  //여기를 바꾸시오
 
 let addNumber=(a)=>(b)=> (c)=> a + b + c;
 return addNumber(1)(2)(3);
   
}

console.log(sumNumber());
```  
  
<hr>
## 참고  
function으로 선언된 일반 함수들은 자바스크립트가 시작됨과 동시에 미리 메모리에 선언되어 기억되어진다(호이스팅개념) 따라서 함수를 선언전에 불러도 무관하다 즉,  
  
```js
return addNumber(1)(2)(3); // 순서상관없음
  function addNumber(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
```  

이거나 

```js
 function addNumber(a) {
   return function (b) {
     return function (c) {
       return a + b + c;
     };
   };
 }
 return addNumber(1)(2)(3);// 순서상관없음
```  

이거나 결과는 같고 에러도 나오지 않는다.  
하지만 화살표 함수는 function으로 선언된것이 아니기 때문에 그렇지 않다. 반드시 선언과 정의 후에 불러줘야한다.  

따라서  
  
```js
return addNumber(1)(2)(3);
let addNumber = (a)=> (b)=> (c)=> a + b + c;
```  
  
이렇게 작성을 할 경우 에러가 난다.  
