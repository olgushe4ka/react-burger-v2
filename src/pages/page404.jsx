import styles from "./pagesStyles.module.css";

function Page404() {

    return (
        <>
            <div className={`${styles.main}`}>
                <p className="text text_type_main-large">Страница не найдена</p>
            </div>
        </>
    );
}

export default Page404;
