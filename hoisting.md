<h1>호이스팅</h1>

* 함수 선언식 실행 전 미리 호출해서 할당받는 것

> const a = 5; <br>
> double() <br>
> function double() { <br>
>   console.log(a*2) <br>
>};

* double을 선언하기 전 상단에서 double()로 먼저 호출하고 있음 
* 어디서는 호출이 가능함
* 호이스팅 현상으로 가능함

> const a = 7; <br>
> cosnt double = function() {<br>
>  console.log(a*2)
>}; <br>

* 함수 선언식이 아니라 함수 표현식에서는 호이스팅 현상이 일어나지 않음
