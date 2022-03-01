import classes from "./Pagination.module.css";
import previousIcon from "../../assets/Previous.svg";
import nextIcon from "../../assets/Next.svg";
const Pagination = () => {
  const activeClass = `${classes.point} ${classes.active}`;
  return (
    <div className={classes.pagination}>
      <img src={previousIcon} alt="Previous Arrow" />
      <span className={activeClass}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <span className={classes.point}></span>
      <img src={nextIcon} alt="Next Arrow" />
    </div>
  );
};
export default Pagination;
