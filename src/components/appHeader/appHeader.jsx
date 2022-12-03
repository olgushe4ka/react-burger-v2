import {
  Logo,
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./appHeader.module.css";
import { Link } from 'react-router-dom';


function AppHeader() {
  return (
    <header className={`${headerStyles.header} pl-15 pr-15 pb-0 pt-0`}>
      <div className={`${headerStyles.boxLeft}`}>
        <Link to="/" className={`${headerStyles.konstructor}`}>
          <div className={`${headerStyles.icon} mr-2 `}>
            <BurgerIcon type="primary" />
          </div>
          <p className="text text_type_main-small">Конструктор</p>{" "}
        </Link>
        <Link to="/feed" className={`${headerStyles.lentaZakazov}`}>
        
          <div className={`${headerStyles.icon} ml-8 mr-2 mb-0 mt-0`}>
            <ListIcon type="primary" />
          </div>
          <p className="mr-33 text text_type_main-small ">Лента заказов</p>
        </Link>
      </div>
      <Link to="/" className="pl-0 pr-30 pb-0 pt-0">
        <Logo className="p-20" />
      </Link>
      <Link to="/profile" className={`${headerStyles.boxLeft}`}>
        <div className={`${headerStyles.icon} mr-2`}>
          <ProfileIcon type="primary" />
        </div>
        <p className="text text_type_main-small">Личный кабинет</p>
      </Link>
    </header>
  );
}

export default AppHeader;
