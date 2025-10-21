export default function ButtonTab(props) {
  //   function handleClick() {
  //     alert("Button clicked");
  //   }
  return (
    <>
      <li>
        <button onClick={props.onSelect}>{props.children}</button>
      </li>
    </>
  );
}
