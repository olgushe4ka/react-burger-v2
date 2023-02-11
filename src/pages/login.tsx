import {
  Input,
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login, getProfileInfo } from "../services/actions/login";
import { useState, useEffect, useCallback, FormEvent } from "react";
import { useSelector, useDispatch } from "../utils/hooks";
import Spinner from "../components/spinner/spinner";

function LoginPage() {
  const isLoading = useSelector((state) => state.login.loginIsLoading);
  const loginSuccess = useSelector((state) => state.login.login.success);

  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [passwordTypeValue, setPasswordTypeValue] = useState("password");

  const errorInReset = useSelector((state) => state.login.loginFailed);

  const inputValue = {
    email: emailValue,
    password: passwordValue,
  };

  const onButtonClick = (value: {}, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest(value);
    getUserInfo();
  };

  const sendRequest = useCallback((value: {}) => {
    dispatch(login(value));
  }, []);

  const getUserInfo = useCallback((value?: any) => {
    dispatch(getProfileInfo(value));
  }, []);

  // if (loginSuccess) {
  //   window.location.reload();
  // }

  const location = useLocation<{ from: Location }>();
  const history = useHistory();

  if (loginSuccess) {
    const { from } = location.state || {
      from: { pathname: "/", state: { background: location } },
    };
    history.push(from.pathname);
  }

  return (
    <>
      {isLoading && <Spinner />}

      <form
        className={`${styles.main}`}
        onSubmit={(event) => onButtonClick(inputValue, event)}
      >
        <p className="text text_type_main-medium">Вход</p>

        <div className="ml-0 mr-0 mb-0 mt-6">
          <EmailInput
            placeholder={"E-mail"}
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"name"}
          />
        </div>
        <div className="ml-0 mr-0 mb-0 mt-6">
          <PasswordInput
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            icon="ShowIcon"
            placeholder={"Пароль"}
          />
        </div>
        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Вы — новый пользователь?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/register">
            Зарегистрироваться
          </Link>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-4`}>
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Забыли пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/forgot-password">
            Восстановить пароль
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
