import {
  Input, Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';
import { passwordResetRequest } from "../services/actions/login";
import { useState, useEffect, useCallback } from 'react';

import { useDispatch } from "react-redux";



function ForgotPassword() {

  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");


  const resetPassword = (value) => {
    sendRequest(value)
      }

    const sendRequest = useCallback((value) => {
      dispatch(passwordResetRequest({ value }));
    }, []) 

   return (
    <>
      <AppHeader />

      <div className={`${styles.main}`}>
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setinputValue(e.target.value)}
            value={inputValue}
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
          <Button htmlType="submit" type="primary" size="medium" onClick={() => resetPassword(inputValue)}>
            Восстановить
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>
            Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/register">Войти!</Link>
        </div>

      </div>
    </>
  );
}

export default ForgotPassword;
