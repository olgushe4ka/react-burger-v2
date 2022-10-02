import ingredientsStyles from './burgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data';

function Tabs() {
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={true}>
                Булки
            </Tab>
            <Tab value="two" >
                Соусы
            </Tab>
            <Tab value="three" >
                Начинки
            </Tab>
        </div>)
}

function Menuconstructor(props) {
    return (
        <div className={`${ingredientsStyles.ingredietBox} pl-5 pr-5 pb-0 pt-6`}>
            <div className={`${ingredientsStyles.counter}`}> <Counter count={1} size="small" /> </div>
            <img src={props.image} alt="фото ингридиента" />
            <div className={ingredientsStyles.priceBox}>  <p className="text text_type_main-medium mr-2">
                {props.price}
            </p>
                <CurrencyIcon type="primary" /> </div>
            <p className="text text_type_main-small mt-2">
                {props.name}
            </p>
        </div>)
}

function BurgerIngredients() {
    return (
        <section className={`${ingredientsStyles.main} pl-15 pr-15 pb-0 pt-0`}>
            <div className={ingredientsStyles.header_fixed}>
                <Tabs />
            </div>
            <p className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}>
                Булки
            </p>
            <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
                {data.map(dataIng => {
                    if (dataIng.type === "bun")
                        return (
                            <Menuconstructor key={dataIng._id} price={dataIng.price} type={dataIng.type} image={dataIng.image} name={dataIng.name} />)
                })}
            </div>
            <p className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}>
                Соусы
            </p>
            <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
                {data.map(dataIng => {
                    if (dataIng.type === "sauce")
                        return (
                            <Menuconstructor key={dataIng._id} price={dataIng.price} type={dataIng.type} image={dataIng.image} name={dataIng.name} />)
                })}
            </div>
            <p className={`${ingredientsStyles.text} text text_type_main-medium ml-0 mr-0 mb-0 mt-10`}>
                Начинки </p>
            <div className={`${ingredientsStyles.menuBox} pl-0 pr-0 pb-0 pt-6`}>
                {data.map(dataIng => {
                    if (dataIng.type === "main")
                        return (
                            <Menuconstructor key={dataIng._id} price={dataIng.price} type={dataIng.type} image={dataIng.image} name={dataIng.name} />)
                })}
            </div>
        </section>
    )
}


export default BurgerIngredients;
