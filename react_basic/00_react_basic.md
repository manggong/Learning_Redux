# React

### 싱글 페이지 앱을 제작할 때 중요한 3가지

1. 싱글 페이지 앱에서는 데이터와 UI 동기화에 많은 시간이 필요하다.

- 각 Component들의 Cycle 고려

2. DOM 조작

- DOM관련 작업은 브라우저에서 일어나는 일들 중 가장 느리다.

3. HTML 탬플릿을 다루는 고통

- HTML을 다룰 일이 아주 많음

### React의 장점

1. UI 상태의 자동 관리

- React는 마지막 상태만 신경쓴다.

2. 빠른 DOM 조작

- React는 가상 DOM을 사용하여 기존의 느린 DOM을 개선 함.

3. 조립하기 쉬운 UI를 지원하는 API

- React는 작은 Component의 집합

4. Javascript로 정의

- 프레임워크의 어노테이션, 컨벤션에 구애받지 않고 Javascript로만 작성 가능
- Javasciprt와 호환되면서 HTML과 닮은 `JSX`를 사용

5. MVC 아키텍처의 `V`

- 비주얼 요소와 그 상태를 최신으로 유지하며, View 레이어에서 작동한다.
