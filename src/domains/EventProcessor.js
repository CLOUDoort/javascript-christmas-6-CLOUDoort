import MENU from '../constants/menu';

class EventProcessor {
  #visitDate;

  #selectedMenus;

  #benefits;

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
}

export default EventProcessor;
