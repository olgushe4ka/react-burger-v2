import styles from "./feed-numbers.module.css";
import { useSelector, useDispatch } from "../../utils/hooks";
import { TIingredient, TOrders } from "../../types/ingredients";

function FeedNumbers({ numbers }: {numbers:any} ) {
  const orders = useSelector((state) => state.ws.table.orders);

  const ready = orders
    ?.filter((item: TOrders) => item.status === "done")
    .slice(0, 5);
  const pending = orders
    ?.filter((item: TOrders) => item.status === "pending")
    .slice(0, 5);

  const readyNumbers = ready?.map((item: TOrders) => item.number);
  const pendingNumbers = pending?.map((item: TOrders) => item.number);

  return (
    <div className={`${styles.main} `}>
      <div className={`${styles.readyBox} `}>
        <h3
          className={`${styles.ready} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}
        >
          Готовы:
        </h3>
        {readyNumbers?.map((number: number) => {
          return (
            <p
              key={number}
              className={`${styles.readyNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}
            >
              {number}
            </p>
          );
        })}
      </div>

      <div className={`${styles.inWorkBox} `}>
        <h3
          className={`${styles.inWork} text text_type_main-medium  pl-0 pr-0 pb-4 pt-0`}
        >
          В работе:
        </h3>

        {pendingNumbers?.map((number: number) => {
          return (
            <p
              key={number}
              className={`${styles.inWorkNumber} text text_type_main-medium  pl-0 pr-0 pb-0 pt-2`}
            >
              {number}
            </p>
          );
        })}
      </div>

      <div className={`${styles.doneBox} `}>
        <h3
          className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}
        >
          Выполнено за всё время:
        </h3>
        <p
          className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}
        >
          {numbers?.total}
        </p>
      </div>

      <div className={`${styles.doneTodayBox} `}>
        <h3
          className={`${styles.titleDone} text text_type_main-medium  pl-0 pr-0 pb-0 pt-0`}
        >
          Выполнено за сегодня:
        </h3>
        <p
          className={`${styles.numberBig} text text_type_digits-large  pl-0 pr-0 pb-0 pt-0`}
        >
          {numbers?.totalToday}
        </p>
      </div>
    </div>
  );
}

export default FeedNumbers;
