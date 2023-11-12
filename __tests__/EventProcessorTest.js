import BENEFIT_CONSTANT from '../src/constants/benefit';
import EventProcessor from '../src/domains/EventProcessor';

const testSelectedMenu1 = new Map([
  ['티본스테이크', 1],
  ['바비큐립', 1],
  ['초코케이크', 2],
  ['제로콜라', 1],
]);
const testSelectedMenu2 = new Map([
  ['타파스', 1],
  ['제로콜라', 1],
]);

describe('EventProcessor 클래스 테스트.', () => {
  test.each([
    {
      visitDate: 5,
      selectedMenu: testSelectedMenu1,
      expectedTotalAmountBeforeDiscount: 142_000,
    },
    {
      visitDate: 26,
      selectedMenu: testSelectedMenu2,
      expectedTotalAmountBeforeDiscount: 8_500,
    },
  ])('할인 전 총주문 금액 계산', (test) => {
    // Arrange
    const { visitDate, selectedMenu, expectedTotalAmountBeforeDiscount } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const totalAmountBeforeDiscount = processor.getTotalAmountBeforeDiscount();

    // Assert
    expect(totalAmountBeforeDiscount).toBe(expectedTotalAmountBeforeDiscount);
  });

  test.each([
    {
      selectedMenu: testSelectedMenu1,
      expectedGift: BENEFIT_CONSTANT.gift.item,
    },
    {
      selectedMenu: testSelectedMenu2,
      expectedGift: BENEFIT_CONSTANT.nothing,
    },
  ])('증정 메뉴를 조건에 맞게 반환.', (test) => {
    // Arrange
    const visitDate = 5;
    const { selectedMenu, expectedGift } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const checkGiftResult = processor.getCheckGiftResult();

    // Assert
    expect(checkGiftResult).toBe(expectedGift);
  });

  test.each([
    {
      selectedMenu: testSelectedMenu1,
      visitDate: 3,
      expectedBenefitsResult: new Map([
        [BENEFIT_CONSTANT.benefitNames.dDayDiscount, 1_200],
        [BENEFIT_CONSTANT.benefitNames.weekDay, 4_046],
        [BENEFIT_CONSTANT.benefitNames.specialDiscount, 1_000],
        [BENEFIT_CONSTANT.benefitNames.giftEvent, 2_5000],
      ]),
    },
    {
      selectedMenu: testSelectedMenu2,
      visitDate: 26,
      expectedBenefitsResult: BENEFIT_CONSTANT.nothing,
    },
  ])('혜택 내역 저장.', (test) => {
    // Arrange
    const { selectedMenu, visitDate, expectedBenefitsResult } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const benefitsResult = processor.getBenefitsResult();

    // Assert
    expect(benefitsResult).toEqual(expectedBenefitsResult);
  });

  test.each([
    {
      selectedMenu: testSelectedMenu1,
      visitDate: 3,
      expectedTotalBenefitsAmount: 31_246,
    },
    {
      selectedMenu: testSelectedMenu2,
      visitDate: 26,
      expectedTotalBenefitsAmount: BENEFIT_CONSTANT.nothingAmount,
    },
  ])('총혜택 금액 계산.', (test) => {
    // Arrange
    const { selectedMenu, visitDate, expectedTotalBenefitsAmount } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const totalBenefitsAmount = processor.getTotalBenefitsAmount();

    // Assert
    expect(totalBenefitsAmount).toBe(expectedTotalBenefitsAmount);
  });

  test.each([
    {
      visitDate: 3,
      selectedMenu: testSelectedMenu1,
      expectedTotalAmountAfterDiscount: 135_754,
    },
    {
      visitDate: 26,
      selectedMenu: testSelectedMenu2,
      expectedTotalAmountAfterDiscount: 8_500,
    },
  ])('할인 후 예상 결제 금액 계산.', (test) => {
    // Arrange
    const { selectedMenu, visitDate, expectedTotalAmountAfterDiscount } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const totalAmountAfterDiscount = processor.getTotalAmountAfterDiscount();

    // Assert
    expect(totalAmountAfterDiscount).toBe(expectedTotalAmountAfterDiscount);
  });

  test.each([
    {
      visitDate: 3,
      selectedMenu: testSelectedMenu1,
      expectedEventBadge: BENEFIT_CONSTANT.eventBadge.santa.item,
    },
    {
      visitDate: 26,
      selectedMenu: testSelectedMenu2,
      expectedEventBadge: BENEFIT_CONSTANT.nothing,
    },
  ])('이벤트 뱃지를 조건에 맞게 반환.', (test) => {
    // Arrange
    const { visitDate, selectedMenu, expectedEventBadge } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const eventBadge = processor.getEventBadge();

    // Assert
    expect(eventBadge).toBe(expectedEventBadge);
  });
});
