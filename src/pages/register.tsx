import {
  Input,
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link } from "react-router-dom";
import { register } from "../services/actions/login";
import { useState, useEffect, useCallback, FormEvent } from "react";
import { useSelector, useDispatch } from "../utils/hooks";
import Spinner from "../components/spinner/spinner";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const registrationFailed = useSelector(
    (state) => state.login.registrationFailed
  );
  const isLoading = useSelector((state) => state.login.registrationIsLoading);
  const registrationSuccess = useSelector(
    (state) => state.login.registration.success
  );

  const inputValue = {
    email: emailValue,
    password: passwordValue,
    name: nameValue,
  };

  const onButtonClick = (value: {}, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest(value);

    if (registrationFailed === true) {
      alert("Ошибка в данных");
    }

    if (registrationSuccess === true) {
      history.replace({ pathname: "/register" });
    }
  };

  const sendRequest = useCallback((value: any) => {
    dispatch(register(value));
  }, []);

  return (
    <>
      {isLoading && <Spinner />}

      <form
        className={`${styles.main}`}
        onSubmit={(event) => onButtonClick(inputValue, event)}
      >
        <p className="text text_type_main-medium">Регистрация</p>
        <div className="ml-0 mr-0 mb-0 mt-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            name={"name"}
            error={false}
            // ref={inputRef}
            //   onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="ml-1"
          />
        </div>
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
            placeholder={"Пароль"}
            onChange={(e) => setPasswordValue(e.target.value)}
            icon={"ShowIcon"}
            value={passwordValue}
            name={"name"}
          />
        </div>
        <div className="ml-0 mr-0 mb-0 mt-10">
          <Button htmlType="submit" type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Уже зарегистрированы?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/login">
            {" "}
            Войти!
          </Link>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
