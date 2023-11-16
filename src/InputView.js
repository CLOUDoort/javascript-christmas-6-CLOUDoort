import { Console } from '@woowacourse/mission-utils';
import { InputMessages } from './constants/messages.js';

const InputView = {
  async readDate() {
    const visitDate = await Console.readLineAsync(InputMessages.visitDate);

    return visitDate;
  },
  async readMenu() {
    const selectedMenus = await Console.readLineAsync(InputMessages.menu);

    return selectedMenus;
  },
};

export default InputView;
