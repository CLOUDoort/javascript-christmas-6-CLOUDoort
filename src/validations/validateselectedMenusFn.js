import { ErrorMessages } from '../constants/messages.js';
import { MENU_PRICE, MENU_CATEGORY, MENU_VALIDATE } from '../constants/menu.js';

const checkType = (selectedMenus) => {
  selectedMenus.forEach((menu) => {
    if (menu.length !== MENU_VALIDATE.menuTypeLength)
      throw new Error(ErrorMessages.menu);
  });
};

const checkMenuMin = (selectedMenus) => {
  selectedMenus.forEach(([_, count]) => {
    if (count < MENU_VALIDATE.menuMin) {
      throw new Error(ErrorMessages.menu);
    }
  });
};

const checkDuplicate = (menuArr) => {
  const uniqueMenuArr = new Set(menuArr);
  if (uniqueMenuArr.size !== menuArr.length) {
    throw new Error(ErrorMessages.menu);
  }
};

const checkExist = (menuArr) => {
  const existFlag = menuArr.every((menu) =>
    Object.prototype.hasOwnProperty.call(MENU_PRICE, menu),
  );
  if (!existFlag) throw new Error(ErrorMessages.menu);
};

const checkOnlyBeverage = (menuArr) => {
  const beverageFlag = menuArr.every((menu) =>
    MENU_CATEGORY.beverage.includes(menu),
  );
  if (beverageFlag) throw new Error(ErrorMessages.menu);
};

const checkMenuMax = (selectedMenus) => {
  const menuCount = selectedMenus.reduce(
    (acc, [_, count]) => acc + Number(count),
    0,
  );
  if (menuCount > MENU_VALIDATE.menuMax) throw new Error(ErrorMessages.menu);
};

const validateSelectedMenusFn = (menus) => {
  const selectedMenus = menus.split(',').map((menu) => menu.trim().split('-'));
  const menuArr = selectedMenus.map(([menu, _]) => menu);

  // 형식을 지키지 않은 값
  checkType(selectedMenus);
  // 메뉴 개수 1 미만 숫자
  checkMenuMin(selectedMenus);
  // 중복 메뉴 입력
  checkDuplicate(menuArr);
  // 없는 메뉴 불가
  checkExist(menuArr);
  // 음료만 주문시 불가
  checkOnlyBeverage(menuArr);
  // 메뉴 최대 20개
  checkMenuMax(selectedMenus);
};

export default validateSelectedMenusFn;
