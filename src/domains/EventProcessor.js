import BENEFIT_CONSTANT from '../constants/benefit';
import { MENU_PRICE } from '../constants/menu';
import storeBenefits from '../utils/storeBenefits';

class EventProcessor {
  #visitDate;

  #selectedMenus;

  constructor(visitDate, selectedMenus) {
    this.#visitDate = visitDate;
    this.#selectedMenus = selectedMenus;
  }

  getTotalAmountBeforeDiscount() {
    const selectedMenus = this.#selectedMenus;

    return Array.from(selectedMenus).reduce(
      (total, [selectedMenu, count]) =>
        total + MENU_PRICE[selectedMenu] * count,
      0,
    );
  }

  getCheckGiftResult() {
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();
    if (totalAmountBeforeDiscount >= BENEFIT_CONSTANT.gift.amountLimit) {
      return BENEFIT_CONSTANT.gift.item;
    }

    return BENEFIT_CONSTANT.nothing;
  }

  getBenefitsResult() {
    const visitDate = this.#visitDate;
    const selectedMenu = this.#selectedMenus;
    const benefits = new Map([]);
    const giftResult = this.getCheckGiftResult();
    storeBenefits(benefits, visitDate, giftResult, selectedMenu);

    if (benefits.size === 0) return BENEFIT_CONSTANT.nothing;

    return benefits;
  }

  getTotalBenefitsAmount() {
    const totalBenefits = this.getBenefitsResult();
    if (totalBenefits === BENEFIT_CONSTANT.nothing) {
      return BENEFIT_CONSTANT.nothingAmount;
    }

    const totalBenefitsAmount = Array.from(totalBenefits).reduce(
      (acc, [_, amount]) => acc + amount,
      0,
    );

    return totalBenefitsAmount;
  }

  getTotalAmountAfterDiscount() {
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();
    const totalBenefitsAmount = this.getTotalBenefitsAmount();
    const totalAmountAfterDiscount =
      totalAmountBeforeDiscount - totalBenefitsAmount;

    if (totalBenefitsAmount === BENEFIT_CONSTANT.nothingAmount) {
      return totalAmountBeforeDiscount;
    }

    if (totalAmountBeforeDiscount >= BENEFIT_CONSTANT.gift.amountLimit) {
      return totalAmountAfterDiscount + BENEFIT_CONSTANT.gift.amount;
    }

    return totalAmountAfterDiscount;
  }

  getEventBadge() {
    const totalBenefitsAmount = this.getTotalBenefitsAmount();
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
  }
}

export default EventProcessor;
