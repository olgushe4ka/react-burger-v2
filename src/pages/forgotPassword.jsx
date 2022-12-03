import {
  Input, Button, EmailInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';
import { passwordResetRequest } from "../services/actions/login";
import { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/spinner/spinner";


function ForgotPassword() {

  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");

  const isLoading = useSelector((state) => state.login.passwordResetRequestIsLoading);

  const resetPassword = (value, event) => {
    event.preventDefault();
    sendRequest(value)
  }

  const sendRequest = useCallback((email) => {
    dispatch(passwordResetRequest({ email }));
  }, [])

  return (
    <>

      {isLoading && (
        <Spinner />)}

      <form className={`${styles.main}`} onSubmit={(event) => resetPassword(inputValue, event)}>
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <EmailInput
            placeholder={'Укажите e-mail'}
            onChange={e => setinputValue(e.target.value)}
            value={inputValue}
            name={'name'}
          // ref={inputRef}
          //   onIconClick={onIconClick}

          />
        </div>

        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="submit" type="primary" size="medium">
            Восстановить
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>
            Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/register">Войти!</Link>
        </div>

      </form>
    </>
  );
}

export default ForgotPassword;
