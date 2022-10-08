import {
  Logo,
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./appHeader.module.css";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pl-15 pr-15 pb-0 pt-0`}>
      <div className={`${headerStyles.boxLeft}`}>
        <a href="" className={`${headerStyles.konstructor}`}>
          <div className={`${headerStyles.icon} mr-2 `}>
            <BurgerIcon type="primary" />
          </div>
          <p className="text text_type_main-small">Конструктор</p>{" "}
        </a>
        <a href="" className={`${headerStyles.lentaZakazov}`}>
          {" "}
          <div className={`${headerStyles.icon} ml-8 mr-2 mb-0 mt-0`}>
            <ListIcon type="primary" />{" "}
          </div>
          <p className="mr-33 text text_type_main-small ">Лента заказов</p>{" "}
        </a>
      </div>
      <div className="pl-0 pr-30 pb-0 pt-0">
        <Logo className="p-20" />{" "}
      </div>
      <a href="" className={`${headerStyles.boxLeft}`}>
        <div className={`${headerStyles.icon} mr-2`}>
          <ProfileIcon type="primary" />{" "}
        </div>
        <p className="text text_type_main-small">Личный кабинет</p>{" "}
      </a>
    </header>
  );
}

export default AppHeader;
