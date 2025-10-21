import ReactPrjCreate from "./ReactPrjCreate.tsx";
import { useState } from "react";

export default function MainUI({
  title,
  Content,
  buttonName,
  handleClick,
  showContent,
}) {
  const [showOutPut, setShowOutPut] = useState(false);
  // const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="course">
        <ul>
          <li>
            <h3>{title} </h3>
            <button onClick={handleClick}> {buttonName} </button>
          </li>
        </ul>
      </div>
      {/* {showContent && <Content />} */}
    </>
  );
}
