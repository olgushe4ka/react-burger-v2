import {
  Input, Button, EmailInput, PasswordInput, FormattedDate, CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pages-styles.module.css";
import FeedBurgers from "../components/feed-burgers/feed-burgers";
import FeedNumbers from "../components/feed-numbers/feed-numbers";


function Feed() {
  // const name = useSelector((state) => state.login.userName);
  // const [emailValue, setEmailValue] = useState(email);
  // const dispatch = useDispatch();
  // const sendRequest = useCallback(() => {
  //   dispatch(logOut());
  // }, [])
  // useEffect(() => {
  //   dispatch(getProfileInfo());
  // }, [dispatch]);




  return (
    <div className={`${styles.feedMain} ml-15 mr-0 mb-0 mt-0`}>
      <h2 className={`${styles.feedTitle} text text_type_main-large ml-0 mr-0 mb-5 mt-10`}          >
        Лента заказов
      </h2>
      <div className={`${styles.feedContent} ml-0 mr-0 mb-0 mt-0`}>
        <div className={`${styles.feedNumbers}`}>
          <FeedBurgers />
        </div>
        <FeedNumbers />

      </div>
    </div>
  );
}

export default Feed;
