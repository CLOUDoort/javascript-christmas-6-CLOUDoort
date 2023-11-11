import { ErrorMessages } from './constants/messages.js';

const Validator = {
  validateVisitDate(visitDate) {
    if (!Number.isInteger(visitDate)) {
      throw new Error(ErrorMessages.visitDate);
    }

    if (visitDate < 1 || visitDate > 31) {
      throw new Error(ErrorMessages.visitDate);
    }
  },
};

export default Validator;
