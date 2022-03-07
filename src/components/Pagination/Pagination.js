import { Link } from "react-router-dom";
import classes from "./Pagination.module.css";
import previousIcon from "../../assets/Previous.svg";
import nextIcon from "../../assets/Next.svg";
const Pagination = (props) => {
  const activeClass = `${classes.point} ${classes.active}`;
  let next;
  if (props.formValid) {
    next = props.onNextPage;
  }

  return (
    <div className={classes.pagination}>
      <Link onClick={props.onPreviousPage} to={props.prev}>
        <img src={previousIcon} alt="Previous Arrow" />
      </Link>
      <span className={activeClass}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <Link to={props.next}>
        <div onClick={next}>
          <img src={nextIcon} alt="Next Arrow" />
        </div>
      </Link>
    </div>
  );
};
export default Pagination;
