import OutputView from '../OutputView.js';

const handleException = async (action) => {
  while (true) {
    try {
      return await action();
    } catch ({ message }) {
      OutputView.printError(message);
    }
  }
};
export default handleException;
