// JSでのオブジェクトとは？
//オブジェクトとは、関連するデータや 機能の集合体です。
// これらは通常、いくつかの変数や関数（オブジェクトの中にある場合はプロパティやメソッドと呼ばれる）で構成されています。
// 見ていくうちに理解できるように、例を挙げてみましょう。

//Key(キー)とvalue(バリュー)形式として関連するデータをひとまとめにする
// const variable name = {
// name: "pooh"
// greet(){
//  }
//}

//Bai1 MANG
// const user  = "HUYEN";
// let

//Fuction
// Function Declaration
// Function functionName(parameters){
// };

//vi du ham tinh tong
//Vi chu xin chao, vi du xin chao co truyen para, ham tinh tich a,b
//gan 1 gia tri default

//Function Express
// let varibleName = function(){};

//Arrow function
//let varibleName()=>{}
// let congNhan (a,b) => { let sum = a+b; let nhan = ...; return }

//Bai 2bject
// const user3 = {
//     "yaku shoku" : "ippan user",

//     greeting(){
//     },
// };

//Bai 3 class
// class User{
//     constructor(name){
//         this.name = name;

//     }
//     greeting(){
//     }
// }

//Bai 4
// const user01 = new User);

//bai 5 array
//array とはオブジェクトの特定のもので、値をINDEXで記憶/格納される。
// const fruit = ["apple","orange","grape"];
//typeof
//Truy cap cac phan tu cua mang
//array in array
//push: them phan tu vao cuoi mang

// Bai 6: map
//map それぞれの要素に対して処理を行い、
// 新しい配列を作り出す
// const mapArray = [1,2,3,4,5];
// const mapArray2 = mapArray.map((item) => {
//     return item*2;
// });

//Bai 7
//chuyen doi phan tu cua mang thanh doi tuong moi
// const mapArray3 = mapArray.map((item)=> ({suuji : item}));

//Bai 8
// const result = mapArray.findIndex((item) =>{
// return item ===2
//});

//Bai 9 Destructuring
// const userName = ["Tanaka", "Yushin", "Hiroki"];
//demo voi cach dung thuong
//muon lay ra tung phan tu thi sao?
// const [user11, user22, user33] = userName;
// console.log(user11, user22, user33);

//co the bo qua phan tu khong can thiet bang cach de dau phay

//Có thể bỏ qua phần từ không cần thiết bằng cach để dấu phẩy
//Destructuring voi gia tri mac dinh
// const [user11, , user33,user55 =""];
// Destructuring vs rest para
//const [user11...rest]; //

//Destructuring voi object
//Chu i key cua object phai chinh la doi tương truyen vao object mới, bởi vì nó ăn theo key nên phải giống nhau
//demo neu lay bang PT thuong user.name cac thu
// const user = { age:20, name; "Pooh"};
// const user1{name, age} = user;

//muon doi ten bien thi sao - dung alis- ten bi danh
//bt phai dat trung ten voiw key nhung neu muon dat khac thi
// user { ten: name, tuoi: age};

//gia tri mac dinh
// user {ten:name, age, hobby = ""};

//Destructuring voi rest parameter
// user [ten: name, ...rest para];
// const user3 = {
//     "yaku shoku" : "ippan user",

//     greeting(){
//     },
// };

//Bai tap
//
