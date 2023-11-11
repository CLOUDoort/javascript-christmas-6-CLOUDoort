import { ErrorMessages } from '../src/constants/messages';
import Validator from '../src/Validator.js';

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
  ])('예상 방문 날짜 예외 처리', ({ visitDate }) => {
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
  ])('예상 방문 날짜 정상 작동', ({ visitDate }) => {
    // Act
    const resultFn = () => Validator.validateVisitDate(visitDate);

    // Assert
    expect(resultFn).not.toThrow(ErrorMessages.visitDate);
  });
});
