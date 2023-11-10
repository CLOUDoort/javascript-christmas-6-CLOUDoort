import BENEFIT_CONSTANT from '../src/constants/benefit';
import EventProcessor from '../src/domains/EventProcessor';

describe('EventProcessor 클래스 테스트', () => {
  test('할인 전 총주문 금액 계산', () => {
    // Arrange
    const visitDate = 5;
    const selectedMenu = new Map([
      ['티본스테이크', 1],
      ['비비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
    const expectedTotalAmountBeforeDiscount = 142_000;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const totalAmountBeforeDiscount = processor.getTotalAmountBeforeDiscount();

    // Assert
    expect(totalAmountBeforeDiscount).toBe(expectedTotalAmountBeforeDiscount);
  });

  test.each([
    {
      selectedMenu: new Map([
        ['티본스테이크', 1],
        ['비비큐립', 1],
        ['초코케이크', 2],
        ['제로콜라', 1],
      ]),
      expectedGift: BENEFIT_CONSTANT.gift,
    },
    {
      selectedMenu: new Map([
        ['타파스', 1],
        ['제로콜라', 1],
      ]),
      expectedGift: BENEFIT_CONSTANT.nothing,
    },
  ])('증정 메뉴 확인', (test) => {
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
      selectedMenu: new Map([
        ['티본스테이크', 1],
        ['비비큐립', 1],
        ['초코케이크', 2],
        ['제로콜라', 1],
      ]),
      visitDate: 3,
      expectedBenefitsResult: new Map([
        [BENEFIT_CONSTANT.benefitNames.dDayDiscount, 1200],
        [BENEFIT_CONSTANT.benefitNames.weekDay, 4046],
        [BENEFIT_CONSTANT.benefitNames.specialDiscount, 1000],
        [BENEFIT_CONSTANT.benefitNames.giftEvent, 25000],
      ]),
    },
    {
      selectedMenu: new Map([
        ['타파스', 1],
        ['제로콜라', 1],
      ]),
      visitDate: 26,
      expectedBenefitsResult: BENEFIT_CONSTANT.nothing,
    },
  ])('혜택 내역 저장', (test) => {
    // Arrange
    const { selectedMenu, visitDate, expectedBenefitsResult } = test;

    // Act
    const processor = new EventProcessor(visitDate, selectedMenu);
    const benefitsResult = processor.getBenefitsResult();

    // Assert
    expect(benefitsResult).toEqual(expectedBenefitsResult);
  });
});
