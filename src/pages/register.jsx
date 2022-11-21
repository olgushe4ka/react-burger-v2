import {
  Input, Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";


function RegisterPage() {

  return (
    <>
      <AppHeader />

      <div className={`${styles.main}`}>
        <p className="text text_type_main-medium">Вход</p>

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
        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="button" type="primary" size="medium">
            Войти
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>Вы — новый пользователь?</p>
          <a className={`${styles.linkDownlogin}`} href={'http://localhost:3000/login'}>Зарегистрироваться</a>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-4`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>Забыли пароль?</p>
          <a className={`${styles.linkDownlogin}`} href={'http://localhost:3000/forgot-password'}>Восстановить пароль</a>
        </div>

      </div>
    </>
  );
}

export default RegisterPage;





