import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";
import { changeProfileInfo, logOut } from "../services/actions/login";
import { useCallback, useState, FormEvent } from "react";
import { eraseCookie } from "../utils/cookie";

function Profile() {
  const name = useSelector((state) => state.login.userName);
  const email = useSelector((state) => state.login.email);
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);

  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    dispatch(logOut());
  }, []);

  const onExitBtnClick = () => {
    sendRequest();
    eraseCookie("accessToken");
    localStorage.removeItem("refreshToken");
   // window.location.reload();
  };

  const valuesChanged = () => {
    if (name === nameValue && email === emailValue) return false;
    else return true;
  };

  //Логика Отмены и Изменения данных пользователя
  const onCancelBtnClick = () => {
    setNameValue(name);
    setEmailValue(email);
  };

  const changeUserInfoRequest = useCallback((data: any) => {
    dispatch(changeProfileInfo(data));
  }, []);

  const inputValue = {
    email: emailValue,
    name: nameValue,
  };

  const onSaveBtnClick = (
    data: {},
    event?: FormEvent<HTMLFormElement> | undefined
  ) => {
    event?.preventDefault();
    changeUserInfoRequest(data);
  };

  return (
    <>
      <div className={`${styles.profileGrid} `}>
        <div className={`${styles.profileLeftBox} ml-0 mr-15 mb-0 mt-0`}>
          <div className={`${styles.profileMenu}`}>
            <Link
              to="/profile"
              className={`${styles.profileButtonActive} text text_type_main-medium`}
            >
              Профиль
            </Link>
            <Link
              to="/profile/orders"
              className={`${styles.profileButton} text text_type_main-medium`}
            >
              История заказов
            </Link>
            <button
              className={`${styles.profileButton} text text_type_main-medium`}
              onClick={() => onExitBtnClick()}
            >
              Выход
            </button>
          </div>

          <p
            className={`${styles.ptofileTextDown} text text_type_main-default ml-0 mr-0 mb-0 mt-20`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>

        <form
          className={`${styles.profileInput}`}
          onSubmit={(event) => onSaveBtnClick(inputValue, event)}
        >
          <div className="ml-0 mr-0 mb-0 mt-0">
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
              icon={"EditIcon"}
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <EmailInput
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              name={"email"}
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-2"
            />
          </div>
          <div className="ml-0 mr-0 mb-0 mt-6">
            <PasswordInput
              onChange={() => {}}
              value={"password"}
              name={"password"}
              icon="EditIcon"
            />
          </div>
          {valuesChanged() && (
            <div className={`${styles.profileButtonBox} ml-0 mr-0 mb-0 mt-6`}>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={onCancelBtnClick}
              >
                Отмена
              </Button>
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                onClick={() => onSaveBtnClick(inputValue)}
              >
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Profile;
