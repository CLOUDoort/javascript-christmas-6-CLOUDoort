const currencyFormat = (amount) =>
  new Intl.NumberFormat('en-US').format(amount);

export default currencyFormat;
