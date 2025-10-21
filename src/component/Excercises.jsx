export default function Excercises({ exceTitle, excercise }) {
  return (
    <>
      <h2>練習問題：{exceTitle}</h2>
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>{excercise}</p>
    </>
  );
}
