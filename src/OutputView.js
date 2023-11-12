import { Console } from '@woowacourse/mission-utils';
import { OutputMessages } from './constants/messages.js';
import BENEFIT_CONSTANT from './constants/benefit.js';
import currencyFormat from './utils/currencyFormat.js';

const LINE_SEPARATOR = ' \n ';
const currency = '원';

const OutputView = {
  printGreeting() {
    Console.print(OutputMessages.greeting);
  },

  printPreview(date) {
    Console.print(OutputMessages.preview(date));
  },

  printMenu(selectedMenu) {
    Console.print(`${OutputMessages.menu}`);
    selectedMenu.forEach((menu) => {
      Console.print(`${menu[0]} ${menu[1]}개`);
    });
  },

  printTotalAmountBeforeDiscount(totalAmountBeforeDiscount) {
    Console.print(
      `${
        OutputMessages.totalAmountBeforeDiscount +
        currencyFormat(totalAmountBeforeDiscount) +
        currency +
        LINE_SEPARATOR
      }`,
    );
  },

  printGift(gift) {
    Console.print(`${OutputMessages.gift + gift + LINE_SEPARATOR}`);
  },

  printBenefits(benefits) {
    if (benefits === BENEFIT_CONSTANT.nothing) {
      return Console.print(
        `${
          OutputMessages.benefits + LINE_SEPARATOR + benefits + LINE_SEPARATOR
        }`,
      );
    }
    Console.print(`${OutputMessages.benefits}`);
    Array.from(benefits).forEach(([benefit, amount]) => {
      Console.print(`${benefit}: -${currencyFormat(amount) + currency}`);
    });
    Console.print(' ');
    return true;
  },

  printBenefitsAmount(benefitsAmount) {
    let amount = benefitsAmount;
    amount &&= `-${currencyFormat(benefitsAmount)}`;
    Console.print(
      `${OutputMessages.benefitsAmount + amount + currency + LINE_SEPARATOR}`,
    );
  },

  printTotalAmountAfterDiscount(totalAmountAfterDiscount) {
    Console.print(
      `${
        OutputMessages.totalAmountAfterDiscount +
        currencyFormat(totalAmountAfterDiscount) +
        currency +
        LINE_SEPARATOR
      }`,
    );
  },

  printEventBadge(eventBadge) {
    Console.print(`${OutputMessages.eventBadge + eventBadge}`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
