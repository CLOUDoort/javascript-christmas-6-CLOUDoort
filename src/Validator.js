import validateVisitDateFn from './validations/validateVisitDateFn.js';
import validateSelectedMenusFn from './validations/validateselectedMenusFn.js';

const Validator = {
  validateVisitDate(visitDate) {
    validateVisitDateFn(visitDate);
  },

  validateSelectedMenus(selectedMenus) {
    validateSelectedMenusFn(selectedMenus);
  },
};

export default Validator;
