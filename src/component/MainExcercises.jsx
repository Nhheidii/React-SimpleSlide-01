import Excercises from "./Excercises";
import ShowCode from "./ShowCode";
import { useState } from "react";

export default function MainExcercises() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h3> Enter "answer" to see the answer/delete to hide answer </h3>
      <input
        placeholder="Enter answer please"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue === "answer" && <ShowCode />}

      <Excercises
        exceTitle="Exercise 1"
        excercise={`社員情報を管理しよう！

1️⃣ EmployeeとのClass作成する
「Employee」というクラスを作り、社員の情報（名前/name・年齢/age・給料/salary）をプロパティとして持たせましょう。
さらに、社員が自己紹介するためのメソッド greeting() を作成/Consoleに表示して確認してください。

2️⃣ Employeeの配列を作る
複数の社員（例：Hiroki、Kato、Sakura）を Employee Classからインスタンス化して、配列employees に格納しましょう。
※Instance/ インスタンスっては不明だったら、調べて頂いて大丈夫です。

3️⃣ Method(Greeting) を呼び出す
最初の社員の greeting() メソッドを呼び出して、コンソールに自己紹介を表示させてください。

4️⃣ mapを使って新しい配列を作成する
社員配列から、社員の「名前/name」と「給料/salary」だけを取り出した新しい配列 employeeInfo を作成しましょう。

5️⃣ findIndexを使って特定の社員を探す
名前が "Hiroki" の社員が何番目にいるのか、findIndex メソッドを使って調べてみましょう。

6️⃣ 分割代入（Destructuring）を使ってデータを取り出す
最初の社員の情報を分割代入で取り出し、名前/name・年齢/ageをコンソールに表示してください。`}
      />
    </>
  );
}
