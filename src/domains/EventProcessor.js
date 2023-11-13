import { MENU_PRICE } from '../constants/menu.js';
import checkBenefitsResult from '../utils/benefits/checkBenefitsResult.js';
import checkEventBadge from '../utils/benefits/checkEventBadge.js';
import checkGiftResult from '../utils/benefits/checkGift.js';
import checkTotalAmountAfterDiscount from '../utils/benefits/checkTotalAmountAfterDiscount.js';
import checkTotalBenefitsAmount from '../utils/benefits/checkTotalBenefitsAmount.js';

class EventProcessor {
  #visitDate;

  #selectedMenus;

  constructor(visitDate, selectedMenus) {
    this.#visitDate = visitDate;
    this.#selectedMenus = selectedMenus;
  }

  getTotalAmountBeforeDiscount() {
    return Array.from(this.#selectedMenus).reduce(
      (total, [selectedMenu, count]) =>
        total + MENU_PRICE[selectedMenu] * count,
      0,
    );
  }

  getCheckGiftResult() {
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();

    return checkGiftResult(totalAmountBeforeDiscount);
  }

  getBenefitsResult() {
    const giftResult = this.getCheckGiftResult();
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();

    return checkBenefitsResult(
      this.#visitDate,
      this.#selectedMenus,
      giftResult,
      totalAmountBeforeDiscount,
    );
  }

  getTotalBenefitsAmount() {
    const totalBenefits = this.getBenefitsResult();

    return checkTotalBenefitsAmount(totalBenefits);
  }

  getTotalAmountAfterDiscount() {
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();
    const totalBenefitsAmount = this.getTotalBenefitsAmount();
    const totalAmountAfterDiscount =
      totalAmountBeforeDiscount - totalBenefitsAmount;

    return checkTotalAmountAfterDiscount(
      totalBenefitsAmount,
      totalAmountBeforeDiscount,
      totalAmountAfterDiscount,
    );
  }

  getEventBadge() {
    const totalBenefitsAmount = this.getTotalBenefitsAmount();

    return checkEventBadge(totalBenefitsAmount);
  }
}

export default EventProcessor;
