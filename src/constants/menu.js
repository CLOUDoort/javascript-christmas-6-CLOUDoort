const MENU_PRICE = Object.freeze({
  양송이수프: 6_000,
  타파스: 5_500,
  시저샐러드: 8_000,
  티본스테이크: 55_000,
  바비큐립: 54_000,
  해산물파스타: 35_000,
  크리스마스파스타: 25_000,
  초코케이크: 15_000,
  아이스크림: 5_000,
  제로콜라: 3_000,
  레드와인: 60_000,
  샴페인: 25_000,
});

const MENU_CATEGORY = Object.freeze({
  appetizer: ['양송이수프', '타파스', '시저샐러드'],
  main: ['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타'],
  dessert: ['초코케이크', '아이스크림'],
  beverage: ['제로콜라', '레드와인', '샴페인'],
});

const MENU_VALIDATE = Object.freeze({
  menuMin: 1,
  menuMax: 20,
  menuTypeLength: 2,
});

export { MENU_PRICE, MENU_CATEGORY, MENU_VALIDATE };
