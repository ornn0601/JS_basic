# ES6  
  
## ES6 최신 문법 퀴즈  
  
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

### 참고    
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

<hr>

## 배열 함수 퀴즈  

모든 문제에는 다음 배열이 쓰입니다.

```js
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];
```  
  
  
(문제1. map 문제)  
- 1. 모든 이름을 대문자로 바꾸어서 출력하시오.  
- 2. 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])  
- 3. 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])  
  
```js
// 1
let upperCaseName = names.map((item)=>item.toUpperCase());
console.log(upperCaseName);
```
```js
// 2
let firstNames = names.map((item)=>item.split(' ')[0]);
console.log(firstNames);
```  
```js
// 3
let initialOnly = names.map((item) => {
    let splitName = item.split(" ");
    let initial = "";
    splitName.forEach((nameItem) => (initial += nameItem[0]));
    return initial;
  })
console.log(initialOnly);
```
  
  
(문제2. filter 문제)  
- 1. 이름에 a를 포함한 사람들을 출력하시오.  
- 2. 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)  
  
```js
// 1
let includeA = names.filter((item)=>item.includes('a'))
console.log(includeA)
```  
```js
// 2
let doubleLetter =  names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => letter == splitName[index + 1]);
});
console.log(doubleLetter);
```
  
  
(문제3. some 문제)  
- 1. 전체 이름의 길이가 20자 이상인 사람이 있는가?   
- 2. 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)  
  
```js
// 1
console.log(names.some((item)=>item.length >= 20));
```  
```js
// 2
console.log(names.some((item)=>{
  let splitName = item.split(' ');
  splitName.pop();
  return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
}));
```
  

(문제4. every 문제)  
- 1. 모두의 전체 이름의 길이가 20자 이상인가?  
- 2. 모두의 이름에 a 가 포함되어 있는가?   
  
```js
// 1
console.log(names.every(item=>item.length >= 20));
```  
```js
// 2
console.log(names.every(item=>item.includes('a')));
```
  

(문제5. find 문제)  
- 1. 전체 이름의 길이가 20자 이상인 사람을 찾으시오.  
- 2. 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)  
  
```js
// 1
console.log(names.find(item=>item.length >= 20));
```  
```js
// 2
console.log(names.find(item=>item.split(' ').length >= 3));
```
  
   
(문제6. findIndex 문제)   
- 1. 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.  
- 2. 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.  
  
```js
// 1
console.log(names.findIndex(item=>item.length >= 20));
```  
```js
// 2
console.log(names.findIndex(item=>item.split(' ').length >= 3));
```