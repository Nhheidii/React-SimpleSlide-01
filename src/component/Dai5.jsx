import fragment from "../img/fragment.png";
import MainProp from "./MainProp";
// import pic1 from "../img/kiyomizu.jpeg";
// import pic2 from "../img/yoshida.jpeg";
import pic3 from "../img/kifune.jpeg";
import { data01 } from "../data01.js";
import ButtonTab from "./ButtonTab.jsx";

export default function Dai5() {
  function handleSelect(selectedButton) {
    alert(`${selectedButton} is clicked`);
  }
  return (
    <>
      <h1>JSXとは？</h1>
      <p>JavaScript Syntax Extension（JavaScriptの構文拡張）</p>
      <p>
        Browser can’t understand <code>.jsx</code> files directly, so we need a
        tool like <b>Vite</b> to transform JSX into plain JavaScript.
      </p>
      <p>And to run Vite, we need Node.js → Vite running environment.</p>

      <h1>Fragment</h1>
      <img
        src={fragment}
        alt="React Fragment example"
        style={{ width: "60%" }}
      />

      <h1>Rule of Function in React</h1>
      <p>・最初の文字を大文字にする</p>
      <p>・表示可能な要素を1つしかreturnしません。</p>

      <h1>Props</h1>
      <p>簡単に言えば、propsとはComponentに引き渡すパラメータである。</p>
      <p>propsはobject系です。</p>
      <p>Destructuringでprops.propertyを気楽になれる。</p>

      <div className="img-list">
        <MainProp
          img={data01[0].img}
          style={{ width: "300px" }}
          title={data01[0].title}
          decs={data01[0].decs}
        />
        {/* <MainProp {...data01[2]} /> */}
        <MainProp
          img={pic3}
          style={{ width: "300px" }}
          title="Japan"
          decs="Kifune"
        />
        <MainProp {...data01[2]} />
      </div>
      <h1>Props.children</h1>
      <p>
        buttonのタグで行くと、その<button></button>
        タグの中には、何らかの値を引き渡さないといけないです。
      </p>
      <ul>
        <li>
          <button> Button01 </button>
        </li>
        {/* <ButtonTab onSelect={handleSelect("Button02")}> Button02 </ButtonTab> */}
        {/* <ButtonTab onSelect={handleSelet("Button03")}> Button03 </ButtonTab> */}
        <ButtonTab onSelect={() => handleSelet("Button02")}>
          Button02{" "}
        </ButtonTab>
        <ButtonTab onSelect={() => handleSelet("Button03")}>
          {" "}
          Button03{" "}
        </ButtonTab>
      </ul>
    </>
  );
}
