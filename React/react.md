<h1>React</h1>

* javascript의 라이브러리의 하나로 사용자 인터페이스를 만들기 위해 사용됨
* 라이브러리 : 개발 편의를 위한 도구의 모음

<h1>JSX </h1>

* javascript의 확장 문법
* {}중괄호를 이용해 javascript 표현식을 사용

```

cosnt name = 'eunjeong';
const element = <h1> hello, {name} </h1>

```

* jsx 태그는 자식을 포함함

```

const element = 
  <div>
    <h1> hello </h1>
    <h3> eunjeong </h3>
  </div>


```

* spread 연산자 사용

```

const obj = {
  name : eunjeong,
  age : 96
}

const element = <h1> hello, {...obj.name} </h1>

```


<h1>Babel</h1>

* jsx 표현을 javascript 가 이해할수 있게 바꿔준 js컴파일러