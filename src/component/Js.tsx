import object from "../img/object.png";
import classe from "../img/class.png";

export default function Js() {
  return (
    <>
      <h2>Jsの復習 </h2>
      <h3>Object</h3>
      <p>
        JSのオブジェクトでは、データは「キー（key）」と「値（value）」のペアで構成されています。
      </p>
      <img src={object} style={{ width: "60%" }} />
      <p>
        上の例で行くと、あるオプジェクトにアクセスしたい場合は、2つ方法がある。
      </p>
      <p>└① Dot notation : user.name </p>
      <p>└② Braket notation : user["full name"]</p>
      <p> https://q8mdyn.csb.app/ </p>

      <img src={classe} style={{ width: "60%" }} />
      <p></p>
    </>
  );
}
