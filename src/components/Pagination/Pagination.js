// import { Link } from "react-router-dom";
// import classes from "./Pagination.module.css";
// import previousIcon from "../../assets/Previous.svg";
// import nextIcon from "../../assets/Next.svg";
// import PageContext from "../../context/page-context";
// import { useContext } from "react";
// const Pagination = (props) => {
//   const pageCtx = useContext(PageContext);
//   const { nextPage, prevPage, page } = pageCtx;
//   const activeClass = `${classes.point} ${classes.active}`;
//   let pageIncrease;
//   if (props.formValid) {
//     pageIncrease = nextPage;
//   }

//   return (
//     <div className={classes.pagination}>
//       {page > 1 ? (
//         <Link to={`page${page - 1}`} onClick={prevPage}>
//           <img src={previousIcon} alt="Previous Arrow" />
//         </Link>
//       ) : (
//         <Link to="/" onClick={prevPage}>
//           <img src={previousIcon} alt="Previous Arrow" />
//         </Link>
//       )}

//       <span className={activeClass}></span>
//       <span
//         className={`${
//           window.location.pathname === "/skillsPage"
//             ? activeClass
//             : classes.point
//         }`}
//       ></span>
//       <span
//         className={`${
//           window.location.pathname === "/covidInfo"
//             ? activeClass
//             : classes.point
//         }`}
//       ></span>
//       <span
//         className={`${
//           window.location.pathname === "/aboutYou" ? activeClass : classes.point
//         }`}
//       ></span>
//       <span className={classes.point}></span>
//       {pageIncrease ? (
//         <Link to={`page${page + 1}`} onClick={pageIncrease}>
//           <img src={nextIcon} alt="Next Arrow" />
//         </Link>
//       ) : (
//         <img src={nextIcon} alt="Next Arrow" />
//       )}
//     </div>
//   );
// };
// export default Pagination;
