import handleException from '../utils/handleException.js';
import EventProcessor from '../domains/EventProcessor.js';

class EventPlannerController {
  #validator;

  #inputView;

  #outputView;

  constructor(validator, inputView, outputView) {
    this.#validator = validator;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async plan() {
    this.#outputView.printGreeting();
    const visitDate = await this.#getVisitDate();
    const selectedMenus = await this.#getSelectedMenus();
    this.#outputView.printPreview(visitDate);
    const eventProcessor = new EventProcessor(visitDate, selectedMenus);
    this.#printEventContent(selectedMenus, eventProcessor);
  }

  async #getVisitDate() {
    const getValidVisitDate = async () => {
      const visitDate = Number(await this.#inputView.readDate());
      this.#validator.validateVisitDate(visitDate);

      return visitDate;
    };

    return handleException(getValidVisitDate);
  }

  async #getSelectedMenus() {
    const getValidSelectedMenus = async () => {
      const selectedMenus = await this.#inputView.readMenu();
      this.#validator.validateSelectedMenus(selectedMenus);

      return selectedMenus.split(',').map((menu) => menu.trim().split('-'));
    };

    return handleException(getValidSelectedMenus);
  }

  async #printEventContent(selectedMenus, eventProcessor) {
    this.#outputView.printMenu(selectedMenus);
    this.#outputView.printTotalAmountBeforeDiscount(
      eventProcessor.getTotalAmountBeforeDiscount(),
    );
    this.#outputView.printGift(eventProcessor.getCheckGiftResult());
    this.#outputView.printBenefits(eventProcessor.getBenefitsResult());
    this.#outputView.printBenefitsAmount(
      eventProcessor.getTotalBenefitsAmount(),
    );
    this.#outputView.printTotalAmountAfterDiscount(
      eventProcessor.getTotalAmountAfterDiscount(),
    );
    this.#outputView.printEventBadge(eventProcessor.getEventBadge());
  }
}

export default EventPlannerController;
