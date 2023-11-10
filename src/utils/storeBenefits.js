import { SPECIAL_DATE, WEEK_DAY, WEEK_END } from '../constants/date';

import BENEFIT_CONSTANT from '../constants/benefit';
import { MENU_CATEGORY } from '../constants/menu';

const checkWeekEnd = (benefits, visitDate, selectedMenu) => {
  if (WEEK_END.includes(visitDate)) {
    const discountNumber = Array.from(selectedMenu)
      .filter(([menu, _]) => MENU_CATEGORY.main.includes(menu))
      .reduce((acc, [_, count]) => acc + count, 0);

    if (discountNumber === 0) return;

    benefits.set(
      BENEFIT_CONSTANT.benefitNames.weekEnd,
      discountNumber * BENEFIT_CONSTANT.discountAmount,
    );
  }
};

const checkWeekDay = (benefits, visitDate, selectedMenu) => {
  if (WEEK_DAY.includes(visitDate)) {
    const discountNumber = Array.from(selectedMenu)
      .filter(([menu, _]) => MENU_CATEGORY.dessert.includes(menu))
      .reduce((acc, [_, count]) => acc + count, 0);

    if (discountNumber === 0) return;

    benefits.set(
      BENEFIT_CONSTANT.benefitNames.weekDay,
      discountNumber * BENEFIT_CONSTANT.discountAmount,
    );
  }
};

const checkSpecial = (benefits, visitDate) => {
  if (SPECIAL_DATE.includes(visitDate)) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.specialDiscount,
      BENEFIT_CONSTANT.specialDiscountAmount,
    );
  }
};

const checkDday = (benefits, visitDate) => {
  if (visitDate <= BENEFIT_CONSTANT.dDayDiscountLimit) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.dDayDiscount,
      BENEFIT_CONSTANT.dDayDiscountAmount(visitDate),
    );
  }
};

const storeGiftBenefit = (benefits, giftResult) => {
  if (giftResult === BENEFIT_CONSTANT.gift) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.giftEvent,
      BENEFIT_CONSTANT.giftAmount,
    );
  }
};

const storeBenefits = (benefits, visitDate, giftResult, selectedMenu) => {
  checkWeekDay(benefits, visitDate, selectedMenu);
  checkWeekEnd(benefits, visitDate, selectedMenu);
  checkSpecial(benefits, visitDate);
  storeGiftBenefit(benefits, giftResult);
  checkDday(benefits, visitDate);
};

export default storeBenefits;
