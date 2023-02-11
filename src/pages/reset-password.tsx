import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link } from "react-router-dom";
import { passwordReset } from "../services/actions/login";
import { useState, useEffect, useCallback, FormEvent } from "react";

import { useSelector, useDispatch } from "../utils/hooks";
import Spinner from "../components/spinner/spinner";

function ResetPassword() {
  const dispatch = useDispatch();
  const [pinValue, setPinValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordTypeValue, setPasswordTypeValue] = useState("password");

  const errorInReset = useSelector((state) => state.login.passwordResetFailed);

  const isLoading = useSelector((state) => state.login.passwordResetIsLoading);

  const inputValue = {
    password: emailValue,
    token: pinValue,
  };

  const resetPassword = (value: {}, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest(value);
    if (errorInReset === true) {
      alert("Ошибка в данных");
    }
  };

  const sendRequest = useCallback((value: any) => {
    dispatch(passwordReset({ value }));
  }, []);

  return (
    <>
      {isLoading && <Spinner />}

      <form
        className={`${styles.main}`}
        onSubmit={(event) => resetPassword(inputValue, event)}
      >
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={(e) => setPinValue(e.target.value)}
            icon={"ShowIcon"}
            value={pinValue}
            name={"name"}
          />
        </div>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"name"}
            error={false}
            // ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="ml-1"
          />
        </div>

        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="submit" type="primary" size="medium">
            Восстановить
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/login">
            Войти!
          </Link>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
