import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import FeedBurgers from "../components/feed-burgers/feed-burgers";
import FeedNumbers from "../components/feed-numbers/feed-numbers";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { wsConnect } from "../services/actions/web-soket";
import { baseWS } from "../utils/burger-api";
import { useEffect } from "react";


function Feed() {
  // const name = useSelector((state) => state.login.userName);
  // const [emailValue, setEmailValue] = useState(email);
 const dispatch = useDispatch();
  // const sendRequest = useCallback(() => {
  //   dispatch(logOut());
  // }, [])
  // useEffect(() => {
  //   dispatch(getProfileInfo());
  // }, [dispatch]);

  const allOrders = useSelector((state) => state.ws.table.orders);

  //const ingredientsFromorder = allOrders.ingredients

  //const ingredients = useSelector((state) => state.ingredients.ingredients);

  const numbers = useSelector((state) => state.ws.table);

  //WS

 useEffect(() => {
  dispatch(wsConnect(baseWS));
}, [dispatch]);



  return (
    <div className={`${styles.feedMain} ml-15 mr-0 mb-0 mt-0`}>
      <h2 className={`${styles.feedTitle} text text_type_main-large ml-0 mr-0 mb-5 mt-10`}          >
        Лента заказов
      </h2>
      <div className={`${styles.feedContent} ml-0 mr-0 mb-0 mt-0`}>
      <div className={`${styles.feedNumbers}`}>
        {allOrders?.map((order) => {
          return (
               <FeedBurgers key={uuidv4()} order={order} />
            )
        })}

</div>
        <FeedNumbers  numbers={numbers}/>
      </div>
    </div>
  );
}

export default Feed;
