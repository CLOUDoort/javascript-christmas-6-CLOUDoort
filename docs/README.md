# 기능 구현 목록

> 핵심: 방문 날짜와 주문 메뉴와 개수를 입력하면 다음 내용을 보여준다.

- 주문 메뉴
- 할인 전 총주문 금액
- 증정 메뉴
- 혜택 내역
- 총혜택 금액
- 할인 후 예상 결제 금액
- 12월 이벤트 배지 내용

## 도메인 로직

- [x] 할인 전 총주문 금액 계산
  - 주문 메뉴 순회하면서 금액 계산
- [x] 증정 메뉴 확인
  - 할인 전 총주문 금액이 12만원 이상이면 '샴페인 1개'
  - 아니면 '없음'
- [x] 혜택 내역 저장
  - [x] 총주문 금액 10_000원 이상부터 이벤트 적용
  - [x] 크리스마스 디데이 할인 (방문날짜 <= 25)
    - 할인금액: 1000 + (date - 1)\*100
  - [x] 평일 할인(일~목): 디저트 메뉴 1개 당 2023원 할인
  - [x] 주말 할인(금,토): 메인 메뉴 1개당 2023원 할인
  - [x] 특별 할인: 총주문 금액에서 1000원 할인
  - [x] 증정 이벤트
    - 증정 메뉴 확인하고 혜택 있으면 추가
- [x] 총 혜택 금액
  - 혜택 내역에서 혜택 금액 모두 합산
- [x] 할인 후 예상 결제 금액
  - 할인 전 총주문 금액 - 총 할인 금액 (총 혜택 금액에서 증정 메뉴 혜택 금액 제외)
- [x] 이벤트 배지
  - 총혜택 금액에 따라 차등
    - 5천 원 이상: 별
    - 1만 원 이상: 트리
    - 2만 원 이상: 산타
  - 없으면 '없음'

## 예외 처리

- [x] 입력 공통 로직

  - [x] 잘못된 입력일 경우 throw로 예외 발생시킨다.
  - [x] "[ERROR]"로 시작하는 에러 메시지를 출력하고 그 부분부터 다시 입력 받기

- [x] 방문 예상 날짜

  - [x] 숫자만 입력 가능
  - [x] 1 이상 31 이하의 숫자
  - [x] 에러 메시지: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."

- [x] 입력 메뉴

  - [x] 최대 20개까지만 주문 가능
  - [x] 음료만 주문 시, 주문 불가
  - [x] 없는 메뉴
  - [x] 정해진 형식과 다른 입력
  - [x] 중복 메뉴 입력
  - [x] 에러 메시지: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."

## UI 로직

### 입력

> InputView 객체 활용

- [x] 예상 방문 날짜 입력

- [x] 주문할 메뉴와 개수 입력

### 출력

> OutputView 객체 활용

- [x] 주문 메뉴 출력
- [x] 할인 전 총 주문 금액 출력
- [x] 증정 메뉴 출력
- [x] 혜택 내역 출력
- [x] 총 혜택 금액 출력
- [x] 할인 후 예상 결제 금액 출력
- [x] 이벤트 배지 출력
