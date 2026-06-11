import { S } from "./Menu_Styled";

const menuItems = [
  { title: "Home", href: "main" },
  { title: "Skills", href: "skills" },
  { title: "About Me", href: "aboutme" },
  { title: "My Works", href: "portfolio" },
];

type MenuPropsType = {
  onBurgerBtnClick?: () => void;
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
// export const Menu = () => {
  return (
    <S.Menu>
      <S.MenuList>
        {menuItems.map((item, index) => (
          <S.ListItem key={index}>
            <S.NavLink
              activeClass="active"
              to={item.href}
              smooth={true}
              spy={true}
              offset={-80}
                onClick={() => props.onBurgerBtnClick && props.onBurgerBtnClick()}
            >
              {/* {item.title} */}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
            {item.title}
          </S.ListItem>
        ))}
      </S.MenuList>
    </S.Menu>
  );
};
