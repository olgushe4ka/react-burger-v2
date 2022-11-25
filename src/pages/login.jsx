import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/appHeader/appHeader";
import styles from "./pagesStyles.module.css";
import { Link } from 'react-router-dom';
import { register } from "../services/actions/login";
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";


function LoginPage() {


    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [passwordTypeValue, setPasswordTypeValue] = useState("password");

    const registrationFailed = useSelector((state) => state.login.registrationFailed);


    const inputValue = {
        "email": emailValue,
        "password": passwordValue,
        "name": nameValue
    }

    const onButtonClick = (value) => {
        sendRequest(value);
        if (registrationFailed === true) {
            alert("Ошибка в данных");
        }
    }

    const sendRequest = useCallback((value) => {
        dispatch(register(value));
    }, [])

    const onIconPasswordClick = () => {
        if (passwordTypeValue === "text") {
            setPasswordTypeValue("password")
        }
        else setPasswordTypeValue("text");
    }



    return (
        <>
            <AppHeader />

            <div className={`${styles.main}`}>
                <p className="text text_type_main-medium">Регистрация</p>
                <div className="ml-0 mr-0 mb-0 mt-6">
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setNameValue(e.target.value)}
                        value={nameValue}
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
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => setEmailValue(e.target.value)}
                        value={emailValue}
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
                        type={passwordTypeValue}
                        placeholder={'Пароль'}
                        onChange={e => setPasswordValue(e.target.value)}
                        icon={'ShowIcon'}
                        value={passwordValue}
                        name={'name'}
                        error={false}
                        // ref={inputRef}
                        onIconClick={onIconPasswordClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className="ml-0 mr-0 mb-0 mt-10">
                    <Button htmlType="button" type="primary" size="medium" onClick={() => onButtonClick(inputValue)}>
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
                    <p className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}>
                        Уже зарегистрированы?
                    </p>
                    <Link className={`${styles.linkDownlogin}`} to="/register"> Войти!</Link>
                </div>

            </div>
        </>
    );
}

export default LoginPage;