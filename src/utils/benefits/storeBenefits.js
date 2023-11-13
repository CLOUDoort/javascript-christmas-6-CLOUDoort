import { SPECIAL_DATE, WEEK_DAY, WEEK_END } from '../../constants/date.js';

import BENEFIT_CONSTANT from '../../constants/benefit.js';
import { MENU_CATEGORY } from '../../constants/menu.js';

const checkWeekEnd = (benefits, visitDate, selectedMenu) => {
  if (WEEK_END.includes(visitDate)) {
    const discountNumber = Array.from(selectedMenu)
      .filter(([menu, _]) => MENU_CATEGORY.main.includes(menu))
      .reduce((acc, [_, count]) => acc + count, 0);

    if (discountNumber === 0) return;

    benefits.set(
      BENEFIT_CONSTANT.benefitNames.weekEnd,
      discountNumber * BENEFIT_CONSTANT.discount.general,
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
      discountNumber * BENEFIT_CONSTANT.discount.general,
    );
  }
};

const checkSpecial = (benefits, visitDate) => {
  if (SPECIAL_DATE.includes(visitDate)) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.specialDiscount,
      BENEFIT_CONSTANT.discount.special,
    );
  }
};

const checkDday = (benefits, visitDate) => {
  if (visitDate <= BENEFIT_CONSTANT.dDay.discountLimit) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.dDayDiscount,
      BENEFIT_CONSTANT.dDay.discountAmount(visitDate),
    );
  }
};

const storeGiftBenefit = (benefits, giftResult) => {
  if (giftResult === BENEFIT_CONSTANT.gift.item) {
    benefits.set(
      BENEFIT_CONSTANT.benefitNames.giftEvent,
      BENEFIT_CONSTANT.gift.amount,
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
