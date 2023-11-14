import { ErrorMessages } from '../src/constants/messages';
import Validator from '../src/Validator';

describe('Validator 클래스 테스트.', () => {
  test.each([
    {
      visitDate: -1,
    },
    {
      visitDate: 50,
    },
    {
      visitDate: 'test',
    },
  ])('예상 방문 날짜 예외 처리.', ({ visitDate }) => {
    // Act
    const resultFn = () => Validator.validateVisitDate(visitDate);

    // Assert
    expect(resultFn).toThrow(ErrorMessages.visitDate);
  });

  test.each([
    {
      visitDate: 1,
    },
    {
      visitDate: 15,
    },
  ])('예상 방문 날짜 정상 동작.', ({ visitDate }) => {
    // Act
    const resultFn = () => Validator.validateVisitDate(visitDate);

    // Assert
    expect(resultFn).not.toThrow(ErrorMessages.visitDate);
  });

  test.each([
    {
      selectedMenus: '해산물파스타-2,레드와인-1,초코케이크-1',
    },
    {
      selectedMenus: '타파스-1,제로콜라-1',
    },
  ])('메뉴 입력 예외 처리.', ({ selectedMenus }) => {
    // Act
    const resultFn = () => Validator.validateSelectedMenus(selectedMenus);

    // Assert
    expect(resultFn).not.toThrow(ErrorMessages.menu);
  });

  test.each([
    {
      selectedMenus: '해산물파스타-2레드와인-2',
    },
    {
      selectedMenus: '해산물파스타-a2',
    },
    {
      selectedMenus: '2-해산물파스타',
    },
    {
      selectedMenus: '타파스-0,제로콜라-1',
    },
    {
      selectedMenus: '해산물파스타-2,해산물파스타-1',
    },
    {
      selectedMenus: '후라이드치킨-1',
    },
    {
      selectedMenus: '제로콜라-1',
    },
    {
      selectedMenus: '해산물파스타-21',
    },
  ])('메뉴 입력 정상 동작.', ({ selectedMenus }) => {
    // Act
    const resultFn = () => Validator.validateSelectedMenus(selectedMenus);

    // Assert
    expect(resultFn).toThrow(ErrorMessages.menu);
  });
});
