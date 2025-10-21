import nodeJs from "../img/nodeJs.png";
import error from "../img/error.png";
import  powershell from "../img/powershell.png";
import cmd from "../img/cmd.png";


export default function ReactPrjCreate() {
  return (
    <>
      <h2> 2.1 How to create a React Project </h2>
      <p>2つ方法がある</p>
      <p>
        └ ① CodeSandBox：React.new 👈
        何もインストール必要がない。直接オンラインで開発可。
      </p>
      <p>└ ② VSCode</p>
      <p>
        ※②.1Extension: Eslint←誤字追跡のサポート：設定→Extension；設定→Eslint
        run→ On Save
      </p>
      ↓<p>※②.2Node Js Download: node js nodejs.org </p>
      <img src={nodeJs} style={{ width: "80%" }} />
      <p />↓<p>※2.3Viteとのプロジェクトを作成 </p>
      <ul>
        <li>Terminal開く：ctrl + @ </li>
        <li> npm create vite@latest </li>
        <li>  cd > prj name </li>
        <li>  npm install </li>
        <li>  npm run dev </li>
      </ul>
      <p> エラーが発生した場合、画像通りに操作をお願いします。</p>
      <img src={error} style={{ width: "80%" }} />
      <img src={powershell} style={{ width: "80%" }} />
      <img src={cmd} style={{ width: "80%" }} />



    </>
  );
}
