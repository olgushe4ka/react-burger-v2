import {
  Input,
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link, Redirect } from "react-router-dom";
import { passwordResetRequest } from "../services/actions/login";
import { useState, useCallback, FormEvent } from "react";

import Spinner from "../components/spinner/spinner";
import { useSelector, useDispatch } from "../utils/hooks";

function ForgotPassword() {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");

  const isLoading = useSelector(
    (state) => state.login.passwordResetRequestIsLoading
  );

  const passwordResetRequestSuccess = useSelector(
    (state) => state.login.passwordResetRequest.success
  );

  const resetPassword = (value: string, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest(value);
  };

  const sendRequest = useCallback((email: string) => {
    dispatch(passwordResetRequest({ email }));
  }, []);

  if (passwordResetRequestSuccess) {
    return <Redirect to="/reset-password" />;
  }

  return (
    <>
      {isLoading && <Spinner />}

      <form
        className={`${styles.main}`}
        onSubmit={(event) => resetPassword(inputValue, event)}
      >
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <EmailInput
            placeholder={"Укажите e-mail"}
            onChange={(e) => setinputValue(e.target.value)}
            value={inputValue}
            name={"name"}
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
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/register">
            Войти!
          </Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
