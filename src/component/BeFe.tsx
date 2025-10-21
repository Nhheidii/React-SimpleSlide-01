import FeBe from "../img/FeBe.jpeg";
import htmlCss from "../img/htmlCssJs.png";
import same from "../img/onajiBubun.png";
import component from "../img/comPonent.png";
import ExamplePage from "./Example";
import FacebookExam from "../img/fbExam.png";
import reactPri from "../img/react.png";

export default function BeFe() {
  return (
    <>
      <h2>1.1 静的なウェブサイト・動的なウェブサイト</h2>
      <p>
        基本として、1つのウェブサイトは2つの部分があり、それはFront EndとBack
        Endである。
      </p>
      <img src={FeBe} style={{ width: "80%" }} />
      <p>https://www.disney.co.jp/tv/dc</p>
      <img src={htmlCss} style={{ width: "80%" }} />
      <h2> 1.2 React JSとは？</h2>
      JavaScriptのライブラリであり、UI（User InterFace）の構築に使われる。
      <ul>
        <li> FaceBookに開発されている。</li>
        <li>
          Reactを利用する有名なウェブサイト: Facebook, Instagram, Tiktok,
          Netflix等
        </li>
        <li> 無料、信頼であり、OpenSourceである</li>
      </ul>
      <h2> 1.3 Reactが必要であるのがなぜ？</h2>
      <p>https://www.disney.co.jp/fc/mickey-friends/character/minnie</p>
      <p>1つのウェブサイトには多くの繰り返し要素がある</p>
      <img src={same} style={{ width: "80%" }} />
      <p>
        それで、処理/設定の同じ部分に対しては、小さくにし、Componetにする（これからコンポーネント化で言うかも）。
      </p>
      <p>
        使用する際には、そのComponentに妥当な情報を更新/引き渡して何回も再利用することが可能。👈
        保守時、新しい機能を追加したい時にもより気楽に！
      </p>
      例）赤枠の画像を以下のものを1つに梱包/Wrapして、コンポーネント化する。
      <p>
        <ul>
          <li>Image</li>
          <li>Headline</li>
          <li>text</li>
        </ul>
      </p>
      <img src={component} style={{ width: "80%" }} />
      <h2> 1.4 Reactのメリットとは？</h2>
      <p>
        Reactのメリットに説明入る前に、過去の知識についてざっと復習をしましょう！
      </p>
      <h3> HTML,CSS,JSにつて振り返り </h3>
      <p>画面遷移したい時はどうしますか？</p>
      <p>画面遷移毎には、他のターゲットページへ遷移される形でしょう？</p>
      <h3> Reactで行く場合 </h3>
      <img src={FacebookExam} style={{ width: "80%" }} />
      <p>
        例）Facebookを使ってる途中で、友達からメッセージが来る時は、そのFacebookのページの全てが際読み込むことではなく、messageとのCoponentのみ再読み込んでる。
      </p>
      <p>投稿　👉 コンポーネント化</p>
      <p>コメント　👉 コンポーネント化</p>
      <p>
        新しいのがあれば、その妥当なコンポーネントのみ再読み込む。他のコンポーネントには影響を与えてない。
      </p>
      <h2> 1.5 Reactはどの様にコンポーネントを更新するか？</h2>
      <p>Virtual DOM（Document Object Model）/ 仮想DOM(kasou)で更新する。</p>
      <p>
        すぐに直接ブラウザに表示するのではなく、アプリケーションのメモリに格納される。
      </p>
      <p>⬆️は抽象でしょう？</p>
      <p> では、ステップずつにBREAK DOWNしよ！</p>
      <img src={reactPri} style={{ width: "90%" }} />
      <p>
        └Step ① 最初のRender：UI更新するために、Reactが本DOMから仮想DOM /Virtual
        DOMを作成する。
      </p>
      <p>
        └Step ② Update virtual DOM：変更があれば（State/props）、ReactがVirtual
        DOMを作成する。
      </p>
      <p>
        └Step ③ Diffing Aglorithm；①で作成したDOMと2で作成したVirtual
        DOMを比較して、違う点を特定する。
      </p>
      <p>└Step ④ 本DOMを更新する；違う点のみを本DOMに反映する。</p>
    </>
  );
}
