import BENEFIT_CONSTANT from '../../constants/benefit.js';

const checkEventBadge = (totalBenefitsAmount) => {
  if (totalBenefitsAmount === BENEFIT_CONSTANT.nothingAmount) {
    return BENEFIT_CONSTANT.nothing;
  }

  if (totalBenefitsAmount < BENEFIT_CONSTANT.eventBadge.tree.limit) {
    return BENEFIT_CONSTANT.eventBadge.star.item;
  }

  if (totalBenefitsAmount < BENEFIT_CONSTANT.eventBadge.santa.limit) {
    return BENEFIT_CONSTANT.eventBadge.tree.item;
  }

  return BENEFIT_CONSTANT.eventBadge.santa.item;
};

export default checkEventBadge;
