import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://localhost:9998",
  headers: {
    //dữ liệu được gửi và nhận từ API sẽ ở định dạng JSON.
    "Content-Type": "application/json",
  },
  withCredentials: true,
  // Cài đặt này cho phép các yêu cầu HTTP bao gồm thông tin về cookies và các thông tin xác thực khác
});

export default ApiClient;
