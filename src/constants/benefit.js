const BENEFIT_CONSTANT = Object.freeze({
  gift: Object.freeze({
    amountLimit: 120_000,
    item: '샴페인 1개',
    amount: 25_000,
  }),
  dDay: Object.freeze({
    discountLimit: 25,
    discountAmount: (date) => 1000 + (date - 1) * 100,
  }),
  benefitNames: Object.freeze({
    dDayDiscount: '크리스마스 디데이 할인',
    weekDay: '평일 할인',
    weekEnd: '주말 할인',
    specialDiscount: '특별 할인',
    giftEvent: '증정 이벤트',
  }),
  discount: Object.freeze({
    general: 2023,
    special: 1000,
  }),
  eventBadge: Object.freeze({
    star: Object.freeze({
      item: '별',
      limit: 5_000,
    }),
    tree: Object.freeze({
      item: '트리',
      limit: 10_000,
    }),
    santa: Object.freeze({
      item: '산타',
      limit: 20_000,
    }),
  }),
  nothing: '없음',
  nothingAmount: '0원',
});

export default BENEFIT_CONSTANT;
