import validateSelectedMenusFn from './validations/validateSelectedMenusFn.js';
import validateVisitDateFn from './validations/validateVisitDateFn.js';

const Validator = {
  validateVisitDate(visitDate) {
    validateVisitDateFn(visitDate);
  },

  validateSelectedMenus(selectedMenus) {
    validateSelectedMenusFn(selectedMenus);
  },
};

export default Validator;
