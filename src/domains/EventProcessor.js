import MENU from '../constants/menu';
import BENEFIT_CONSTANT from '../constants/benefit';

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
      (total, [selectedMenu, count]) => total + MENU[selectedMenu] * count,
      0,
    );
  }

  getCheckGiftResult() {
    const totalAmountBeforeDiscount = this.getTotalAmountBeforeDiscount();
    if (totalAmountBeforeDiscount >= BENEFIT_CONSTANT.giftAmount) {
      return BENEFIT_CONSTANT.gift;
    }

    return BENEFIT_CONSTANT.nothing;
  }
}

export default EventProcessor;
