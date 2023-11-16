import { ErrorMessages } from '../constants/messages.js';
import BENEFIT_CONSTANT from '../constants/benefit.js';

const validateVisitDateFn = (visitDate) => {
  if (!Number.isInteger(visitDate)) {
    throw new Error(ErrorMessages.visitDate);
  }

  if (
    visitDate < BENEFIT_CONSTANT.startDate ||
    visitDate > BENEFIT_CONSTANT.endDate
  ) {
    throw new Error(ErrorMessages.visitDate);
  }
};

export default validateVisitDateFn;
