import BENEFIT_CONSTANT from '../../constants/benefit.js';

const checkTotalBenefitsAmount = (totalBenefits) => {
  if (totalBenefits === BENEFIT_CONSTANT.nothing) {
    return BENEFIT_CONSTANT.nothingAmount;
  }

  return Array.from(totalBenefits).reduce(
    (acc, [_, amount]) => acc + Number(amount),
    0,
  );
};

export default checkTotalBenefitsAmount;
