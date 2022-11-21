import {
  Input, Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';


function ResetPassword() {
  return (
    <>
      <AppHeader />

      <div className={`${styles.main}`}>
        <p className="text text_type_main-medium">Восстановление пароля</p>


        <div className="ml-0 mr-0 mb-0 mt-6">
                    <Input
                        type={'text'}
                        placeholder={'Введите новый пароль'}
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

        <div className="ml-0 mr-0 mb-0 mt-6">
          <Input
            type={'e-mail'}
            placeholder={'Введите код из письма'}
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

        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="button" type="primary" size="medium">
          Восстановить
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>
          Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/login">Войти!</Link>
        </div>

      </div>
    </>
  );
}

export default ResetPassword;
