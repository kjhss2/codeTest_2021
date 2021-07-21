/*
  ---------------------------------------
    |dummy_data 객체 설명|

    items: 로그인 사용자가 보유한 카드 객체들
    status: 요청 상태
    resultCode : 요청 상태 코드
    message: 메시지
    error : 에러 여부 
  ---------------------------------------

  card_no: 카드 고유번호(DB 시퀀스)
  card_nickname: 카드 별칭
  card_memo: 카드 메모
  card_status: 카드 상태(ACTIVE:활성,DEACTIVE:비활성)
  bind_date: 카드 등록일
  is_payment: 이번달 멤버십 지불 여부
  expect_sum_point: 이번달 예상 카드 금액

*/

export const my_cards_data = {
  items: [
    {
      card_no: 1,
      card_nickname: '카카오 카드',
      card_memo: '용돈 전용 카드',
      card_status: "ACTIVE",
      bind_date: "2021-03-12T12:59:07.000+00:00",
      is_payment: true,
      expect_sum_point: 200000
    },
    {
      card_no: 7,
      card_nickname: '농협 카드',
      card_memo: '주택청약 카드',
      card_status: "ACTIVE",
      bind_date: "2021-05-03T08:05:43.000+00:00",
      is_payment: true,
      expect_sum_point: 50000
    },
    {
      card_no: 9,
      card_nickname: '신한 카드',
      card_memo: '보험료 납부용 카드',
      card_status: "ACTIVE",
      bind_date: "2021-07-15T09:17:01.000+00:00",
      is_payment: false,
      expect_sum_point: 150000
    },
    {
      card_no: 54,
      card_nickname: '삼성 카드',
      card_memo: "null",
      card_status: "ACTIVE",
      bind_date: "2021-07-15T09:20:02.000+00:00",
      is_payment: false,
      expect_sum_point: 0
    },
    {
      card_no: 58,
      card_nickname: '국민 카드',
      card_memo: "",
      card_status: "DEACTIVE",
      bind_date: "2021-07-15T09:20:57.000+00:00",
      is_payment: false,
      expect_sum_point: 0
    }
  ],
  status: "SUCCESS",
  resultCode: 200,
  message: null,
  error: false
}