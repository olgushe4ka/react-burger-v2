import {
  Input, Button, PasswordInput, EmailInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { Link, Redirect, useLocation } from 'react-router-dom';
import { login, getProfileInfo } from "../services/actions/login";
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/spinner/spinner";

function LoginPage() {

  const location = useLocation();
  const isLoading = useSelector((state) => state.login.loginIsLoading);


  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [passwordTypeValue, setPasswordTypeValue] = useState("password");

  const errorInReset = useSelector((state) => state.login.loginFailed);
  // const name = useSelector((state) => state.login.login.user.name);
  // console.log(name)

  const inputValue = {
    "email": emailValue,
    "password": passwordValue
  }

  const onButtonClick = (value) => {
    sendRequest(value);
    // if (errorInReset === true) {
    //   alert("Ошибка в данных");
    // }

    //   if (errorInReset === false ) {
    //     const { from } = location.state || { from: { pathname: "/" } };
    //     return <Redirect to={from} />;
    // }


    //   location.reload();
    //window.location.reload();
    getUserInfo();

  }

  const sendRequest = useCallback((value) => {
    dispatch(login(value));
  }, [])

  const getUserInfo = useCallback((value) => {
    dispatch(getProfileInfo(value));
  }, [])



  return (
    <>

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
          <Link className={`${styles.linkDownlogin}`} to="/register">Зарегистрироваться</Link>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-4`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>Забыли пароль?</p>
          <Link className={`${styles.linkDownlogin}`} to="/forgot-password" >Восстановить пароль</Link>
        </div>

      </div>
    </>
  );
}

export default LoginPage;





