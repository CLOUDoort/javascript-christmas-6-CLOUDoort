import BENEFIT_CONSTANT from '../../constants/benefit.js';
import storeBenefits from './storeBenefits.js';

const checkBenefitsResult = (
  visitDate,
  selectedMenus,
  giftResult,
  totalAmountBeforeDiscount,
) => {
  if (totalAmountBeforeDiscount < BENEFIT_CONSTANT.limit) {
    return BENEFIT_CONSTANT.nothing;
  }
  const benefits = new Map([]);
  storeBenefits(benefits, visitDate, giftResult, selectedMenus);

  if (benefits.size === 0) return BENEFIT_CONSTANT.nothing;
  return benefits;
};

export default checkBenefitsResult;
