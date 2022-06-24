<h1>Local Storage</h1>

* 브라우저에 데이터 저장
* 새로고침을 해도 저장한 데이터 유지됨
* 작은 DB

<h3>기능</h3>

* setItem("key", value) : 정보 저장
* getItem(key) : vlaue 값 가져오기
* removeItem(key) : item 삭제 (key:value 삭제)
<hr>

* localstorage에는 문자열만 저장이 된다.
* localstorage.stringify()
* string을 object로 바꿔준다.
* localstorage.parse()
* localstotage에 배열로 저장하고 싶을 때 사용.