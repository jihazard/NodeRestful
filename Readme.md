# REST 란?
* Representaional State Transfer
* 데이터를 주고받을 때 필요한 스팩 
* 표면적인 실체는 스타일 또는 패턴

## Restful API 란?
* REST한 방식의 API란 것은 잘 설계된 API를 말한다
    1. 웹을 근간으로 HTTP Protocol 기반
    2. 리소스는 URI로 표현하며 고유해야 한다.
    3. URI는 단순하고 직관적인 구조여야한다.
    4. 리소스의 상태는 HTTP Method를 활용하여 구분한다.
    5. xml/json 을 활용해서 데이터를 전송한다.

    * restful api 에서 uri는 동사보다는 명사로 표현해 줘야함 

    
## CRUD
 * 네트웍을 통해 웹 리소스를 다루기 위한 행위들 가각의 행위를 처리하기 위한 HTTP methods(POST,GET,PUT,DELETE)
    * Create(POST)
    * Retrieve(GET)
    * Update(PUT)
    * Delete(DELETE)

## API 디자인
* 주로 복수명사를 사용
    - 자동차들 /cars
    - 영화들   /movies
    - 꽃들     /flowers
* 필요하면 URL에 하위자원을 표현
    - 23번 자동차 /cars/23
 * 필터 조건을 허용할 수 있음
    - /cars?stat=active

    예제 
    | URL                  | METHOD               | 설명          |
    | :------------------- | -------------------: |:---------------:|
    | /movies        | GET | 모든영화리스트가져오기 |
    | /movies        | POST | 영화추가 |
    | /movies:title  | GET | 해당영화 가져오기 |
    | /movies:title  | DEL | 해당영화 삭제하기 |
    | /movies:title  | PUT | 해당영화 업데이트하기 |
    | /movies?min=9  | GET | 상영중인 영화리스트 |
    