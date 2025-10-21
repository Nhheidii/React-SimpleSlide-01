// export default function MainProp(props) {
//   return (
//     <>
//       <li className="li-nonDot">
//         <img src={props.img} alt="" style={props.style} />
//         <h2> {props.title} </h2>
//         <p>{props.decs} </p>
//       </li>
//     </>
//   );
// }

export default function MainProp({ img, style, title, decs }) {
  return (
    <>
      <li className="li-nonDot">
        <img src={img} alt="" style={style} />
        <h2> {title} </h2>
        <p>{decs} </p>
      </li>
    </>
  );
}
