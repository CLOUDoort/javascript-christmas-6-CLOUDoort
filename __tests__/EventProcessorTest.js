import EventProcessor from '../src/domains/EventProcessor';

describe('EventProcessor 클래스 테스트', () => {
  test('할인 전 총주문 금액 계산', () => {
    // Arrange
    const visitDate = 5;
    const menus = new Map([
      ['티본스테이크', 1],
      ['비비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
    const expectedTotalAmountBeforeDiscount = 142_000;

    // Act
    const processor = new EventProcessor(visitDate, menus);
    const totalAmountBeforeDiscount = processor.getTotalAmountBeforeDiscount();

    // Assert
    expect(totalAmountBeforeDiscount).toBe(expectedTotalAmountBeforeDiscount);
  });
});
