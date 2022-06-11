<h1>document</h1>

<h2>document.객체</h2>

* .log : 객체의 요소를 보여줌
* .dir : 객체의 속성을 보여줌

<h3>getElementById()</h3>

* 해당 id의 element을 보여줌

<h3>getElementByClassName()</h3>

* 해당 이름의 class를 보여줌
* 동일한 class이름이 있는 경우 array로 return 해줌
* 특정 한 class만 불러올수 없음

<h3>querySelector()<h3>

* element를 css 방식으로 검색 가능 
* ".class이름", "#id이름", "태그이름"
* 같은 이름의 태그 중 첫번째 태그, 단 하나만 return 해줌

<h3>querySelectorAll()<h3>

* 모든 element 찾을 때 사용
* array로 return

<h3>className()<h3>

* 해당 element가 가지고 있던 class는 제거하고 내가 추가한 class를 추가 (최초 class는 제거됨)
* 추가가 아니라 교체 되는 것

<h3>classList()<h3>

* classList.contains() element에 내가 찾는 class가 있는지 확인
* add, remove 할 수 있음
* className과 달리 최초 class는 유지한 상태에서 add, remove 함 



