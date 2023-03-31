// Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b.
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và
// b

// Push 1 giá trị
// let arrUser1 = Number(prompt("Nhập giá trị cách nhau bằng dấu ", "")); // String => Number
// let arrUser2 = +prompt("Nhập giá trị cách nhau bằng dấu ", ""); //  String => Number
// let arrUser3 = parseInt(prompt("Nhập giá trị cách nhau bằng dấu ", "")); // String => Number

// let arr = [4, 5];

// arr.splice(1, 0, arrUser1, arrUser2, arrUser3);
// console.log(arr);

// Push nhiều giá trị trong khoảng từ a -> b - 1
// let a = 5;
// let b = 10;
// let arr = [];

// for (let i = a + 1; i < b; i++) {
//   arr.push(i);
// }

// console.log(arr);

// Tìm số lớn thứ 2 trong mảng

// let arr = [3,2,5,4,6]

// => Số lớn thứ 2: 5
// Bước 1: Tạo mảng rỗng, Sắp xếp lại mảng => push vào mảng rỗng
// Bước 2: Lấy chỉ số phần tử thứ 2 hoặc length-2 trong mảng
// Ví dụ: [6,5,4,3,2]
// => arr[1]

// Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng
// sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi:
// "Red, Green, White, Black"
// "Red + Green + White + Black"

// => Dùng hàm join và dùng vòng lặp

// Chữa bài:
// C1 Sử dụng vòng lặp for
// let myColor = ["Red", "Green", "White", "Black"];
// let result = "";

// for (let i = 0; i < myColor.length; i++) {
//   result += myColor[i];
//   if (i !== myColor.length - 1) {
//     result += ", "; // Thay dẩu phẩy thành dấu +
//   }
// }
// console.log(result);

// C2: sử dụng hàm join()
// let myColor = ["Red", "Green", "White", "Black"];
// let result1 = myColor.join(", ");
// let result2 = myColor.join(" + ");
// // Hàm join là hàm (Function) có sẵn trong JS. giúp biến arr thành 1 chuỗi string
// // và có thể xóa hoặc thêm ký tự vào giữa các phần tử
// console.log(result1);
// console.log(result2);

// Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch
// ngang (-) vào giữa hai số chẵn. Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là
// 0-254-6-8.
// => Dùng hàm join và dùng vòng lặp
// Chữa bài:
// let num = 025468;
// let str = num.toString(); // Ép kiểu dữ liệu thành kiểu string
// let str = prompt("Nhập số liên tiếp nhau: "); // Khi mà để kiểu số thì sẽ mất đi số 0 ở đầu tiên
// let result = [str[0]]; // 2 5 4 6 8
// for (let i = 1; i < str.length; i++) {
//   //   console.log(i); // 1->5
//   //   console.log(str[i]); // 2 5 4 6 8
//   if (str[i - 1] % 2 == 0 && str[i] % 2 == 0) {
//     // Kiểm tra nếu ký tự trước đó và ký tự tại là số chẵn thì thêm dấu "-"
//     result.push("-", str[i]);
//   } else {
//     result.push(str[i]);
//   }
// }

// console.log(result.join("")); // 0-254-6-8

// let a = "4";
// let b = "2";
// console.log("Dấu cộng", a + b); // Phép nối chuỗi
// console.log(a - b); // Tự ép kiểu string thành number
// console.log(a / b); // Tự ép kiểu string thành number
// console.log(a % b); // Tự ép kiểu string thành number
// console.log(a * b); // Tự ép kiểu string thành number

// Bài 3: Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán
// đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải
// là 'tHE qUICK bROWN fOX'.

// Chữa bài
// let str = "The Quick Brown Fox";
// let str = prompt("Nhập đoạn văn bản"); // Trả về kiểu dữ liệu string
// // console.log(typeof str);
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   // 0 => 18
//   //   console.log(str[i]); // T h e ...
//   let addText = str[i]; //0 => 18
//   if (addText === addText.toUpperCase()) {
//     result += addText.toLowerCase();
//   } else {
//     result += addText.toUpperCase();
//   }
// }

// console.log(result); // tHE qUICK bROWN fOX

// "" '' ``

// Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số,
// Các số được phân tách bằng dấu phẩy, tính tổng các số và
// hiển thị cho người dùng

// Chữa bài:
// let inputNumber = prompt("Nhập các số cách nhau bằng dấu ", ""); // String
// let nums = inputNumber.split(","); // trả về kiểu dữ liệu array []
// let result = 0;
// for (let i = 0; i < nums.length; i++) {
//   result += Number(nums[i]);
// }

// console.log(result);
// alert(`Tổng các số là: ${result}`);

// Bài 5: Viết script yêu cầu người dùng nhập một dãy số,
// các số được phân tách bằng dấu phẩy, tìm số nhỏ nhất và
// đăng xuất cho người dùng

// Chữa bài:
// Tìm số nhỏ nhất
// let inputUser = prompt("Nhập dãy số, Cách nhau bằng dấu ", "");
// let nums = inputUser.split(","); // Trả về array: ["1","2","3","4","5"]
// let min = Number(nums[0]);
// for (let i = 0; i < nums.length; i++) {
//   let currentNum = Number(nums[i]);
//   if (currentNum < min) {
//     min = currentNum;
//   }
// }

// console.log(`Số nhỏ nhất là  ${min}`);

// Tìm số nhỏ thứ 2

// let inputUser = prompt("Nhập dãy số, Cách nhau bằng dấu ", "");
// let nums = inputUser.split(","); // Trả về array: ["1","2","3","4","5"]
// let min1 = Number(nums[0]);
// let min2 = Number(nums[1]);
// for (let i = 0; i < nums.length; i++) {
//   let currentNum = Number(nums[i]);
//   if (currentNum < min1) {
//     min2 = min1;
//     min1 = currentNum;
//   } else if (currentNum > min1 && currentNum <= min2) {
//     min2 = currentNum;
//   }
// }

// console.log(`Số nhỏ thứ 2 là  ${min2}`);
// console.log(`Số lớn thứ 2 là  ${min2}`);
