import { MENU_CATEGORY, MENU_PRICE, MENU_VALIDATE } from '../constants/menu.js';

import { ErrorMessages } from '../constants/messages.js';

const checkType = (selectedMenus) => {
  selectedMenus.forEach((menu) => {
    if (
      menu.length !== MENU_VALIDATE.menuTypeLength ||
      !Number.isInteger(Number(menu[1]))
    )
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
  const existFlag = menuArr.every((menu) => menu in MENU_PRICE);

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
  checkType(selectedMenus);
  checkMenuMin(selectedMenus);
  checkDuplicate(menuArr);
  checkExist(menuArr);
  checkOnlyBeverage(menuArr);
  checkMenuMax(selectedMenus);
};

export default validateSelectedMenusFn;
