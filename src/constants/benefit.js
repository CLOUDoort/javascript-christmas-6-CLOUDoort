const BENEFIT_CONSTANT = Object.freeze({
  giftAmountLimit: 120_000,
  gift: '샴페인 1개',
  nothing: '없음',
  dDayDiscountLimit: 25,
  dDayDiscountAmount: (date) => 1000 + (date - 1) * 100,
  benefitNames: Object.freeze({
    dDayDiscount: '크리스마스 디데이 할인',
    weekDay: '평일 할인',
    weekEnd: '주말 할인',
    specialDiscount: '특별 할인',
    giftEvent: '증정 이벤트',
  }),
  discountAmount: 2023,
  specialDiscountAmount: 1000,
  giftAmount: 25000,
});

export default BENEFIT_CONSTANT;
