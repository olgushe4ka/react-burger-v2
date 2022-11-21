import {
  Input, Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";


function Profile() {

  return (
    <>
      <AppHeader />
      <div className={`${styles.profileGrid} `}>
        <div>
          <div className={`${styles.profileMenu}`}>
            <button className={`${styles.profileButton} text text_type_main-medium`}>
              Профиль
            </button>
            <button className={`${styles.profileButton} text text_type_main-medium`}>
              История заказов
            </button>
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

              //  value={value}
              name={'name'}
              error={false}
              // ref={inputRef}
              //   onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="ml-1"
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <Input
              type={'e-mail'}
              placeholder={'E-mail'}
              // onChange={e => setValue(e.target.value)}

              //  value={value}
              name={'name'}
              error={false}
              // ref={inputRef}
              //   onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="ml-1"
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <Input
              type={'text'}
              placeholder={'Пароль'}
              // onChange={e => setValue(e.target.value)}
              icon={'ShowIcon'}
              //  value={value}
              name={'name'}
              error={false}
              // ref={inputRef}
              //   onIconClick={onIconClick}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="ml-1"
            />
          </div>
        </div>


      </div>
    </>
  );
}

export default Profile;
