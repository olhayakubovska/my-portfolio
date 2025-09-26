import { useState } from "react";
import { Menu } from "../../../../components/menu/Menu";
import { S } from "../HeaderMenu_Styled";

export const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu onClick={onBurgerBtnClick}>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MenuPopup isOpen={menuIsOpen}>
        <Menu onBurgerBtnClick={onBurgerBtnClick} />
      </S.MenuPopup>
    </S.MobileMenu>
  );
};
