import BENEFIT_CONSTANT from '../../constants/benefit.js';

const checkGiftResult = (totalAmountBeforeDiscount) => {
  if (totalAmountBeforeDiscount >= BENEFIT_CONSTANT.gift.amountLimit) {
    return BENEFIT_CONSTANT.gift.item;
  }

  return BENEFIT_CONSTANT.nothing;
};

export default checkGiftResult;
