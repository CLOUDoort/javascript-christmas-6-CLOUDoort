import EventPlannerController from './controller/EventPlannerController.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from './Validator.js';

class App {
  #controller = new EventPlannerController(Validator, InputView, OutputView);

  async run() {
    await this.#controller.plan();
  }
}

export default App;
