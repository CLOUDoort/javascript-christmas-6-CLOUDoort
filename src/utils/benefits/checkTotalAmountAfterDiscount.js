import BENEFIT_CONSTANT from '../../constants/benefit.js';

const checkTotalAmountAfterDiscount = (
  totalBenefitsAmount,
  totalAmountBeforeDiscount,
  totalAmountAfterDiscount,
) => {
  if (totalBenefitsAmount === BENEFIT_CONSTANT.nothingAmount) {
    return totalAmountBeforeDiscount;
  }

  if (totalAmountBeforeDiscount >= BENEFIT_CONSTANT.gift.amountLimit) {
    return totalAmountAfterDiscount + BENEFIT_CONSTANT.gift.amount;
  }

  return totalAmountAfterDiscount;
};

export default checkTotalAmountAfterDiscount;
