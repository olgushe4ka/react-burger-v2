import {
  Input, Button, EmailInput, PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';



function Profile() {

  return (
    <>
      <AppHeader />
      <div className={`${styles.profileGrid} `}>
        <div className={`${styles.profileLeftBox} ml-0 mr-15 mb-0 mt-0`}>
          <div className={`${styles.profileMenu}`}>
            <Link to="/profile" className={`${styles.profileButtonActive} text text_type_main-medium`}>
              Профиль
            </Link>
            <Link to="/profile/orders" className={`${styles.profileButton} text text_type_main-medium`}>
              История заказов
            </Link>
            <button className={`${styles.profileButton} text text_type_main-medium`}>
              Выход
            </button>
          </div>

          <p className={`${styles.ptofileTextDown} text text_type_main-default ml-0 mr-0 mb-0 mt-20`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className={`${styles.profileInput}`}>
          <div className="ml-0 mr-0 mb-0 mt-0">
            <Input
              type={'text'}
              placeholder={'Имя'}
              // onChange={e => setValue(e.target.value)}
              value={"Olga"}
              name={'name'}
              error={false}
              // ref={inputRef}
              //   onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="ml-1"
              icon={'EditIcon'}
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <EmailInput
              //  onChange={onChange}
              value={'mail@mail.com'}
              name={'email'}
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-2"
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <PasswordInput
              //onChange={onChange}
              value={'password'}
              name={'password'}
              icon="EditIcon"
            />
          </div>
        </div>


      </div>
    </>
  );
}

export default Profile;
