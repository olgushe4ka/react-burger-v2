import {
  Input, Button, PasswordInput, EmailInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';
import { login } from "../services/actions/login";
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

function RegisterPage() {


const isLoading = useSelector((state) => state.login.loginIsLoading);


  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [passwordTypeValue, setPasswordTypeValue] = useState("password");

  // const errorInReset = useSelector((state) => state.login.loginFailed);


  const inputValue = {
    "email": emailValue,
    "password": passwordValue
  }

  const onButtonClick = (value) => {
    sendRequest(value);
    // if (errorInReset === true) {
    //   alert("Ошибка в данных");
    // }
  }

  const sendRequest = useCallback((value) => {
    dispatch(login(value));
  }, [])


  return (
    <>
      <AppHeader />

      {isLoading && (
    <Spinner />)}

      <div className={`${styles.main}`}>
        <p className="text text_type_main-medium">Вход</p>

        <div className="ml-0 mr-0 mb-0 mt-6">

          <EmailInput
            placeholder={'E-mail'}
            onChange={e => setEmailValue(e.target.value)}
            value={emailValue}
            name={'name'}
          />

        </div>
        <div className="ml-0 mr-0 mb-0 mt-6">
          <PasswordInput
            onChange={e => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={'password'}
            icon="ShowIcon"
            placeholder={'Пароль'}
          />
        </div>
        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="submit" type="primary" size="medium" onClick={() => onButtonClick(inputValue)}>
            Войти
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>Вы — новый пользователь?</p>
          <Link className={`${styles.linkDownlogin}`} to="/login">Зарегистрироваться</Link>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-4`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>Забыли пароль?</p>
          <Link className={`${styles.linkDownlogin}`} to="/forgot-password" >Восстановить пароль</Link>
        </div>

      </div>
    </>
  );
}

export default RegisterPage;





