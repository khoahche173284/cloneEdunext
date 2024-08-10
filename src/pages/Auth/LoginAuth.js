import React, { useEffect, useState } from "react";
import "./Css/Login.css";
import images from "../../assets/image";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserAPI from "./api/UserAPI";

function LoginAuth() {
  const [campus, setCampus] = useState([]);
  const [roleOption, setRoleOption] = useState([]);
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password: '',
    campusId: 1, // Chú ý sửa thành campusCode để khớp với name trong select
  });

  useEffect(() => {
    const fetData = async () => {
      try {
        const resCampus = await axios.get(`http://localhost:9998/campuses`);
        const resRoleOption = await axios.get(`http://localhost:9998/roleAccess`);
        setCampus(resCampus.data);
        setRoleOption(resRoleOption.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetData();
  }, []);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    const updateValue = name === "campusId" ? Number(value) : value;
    setAccount({
      ...account,
      [name]: updateValue,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = account;
      console.log("Attempting login with credentials:", credentials);
      const response = await UserAPI.login(credentials);
      console.log("Login response:", response);
      localStorage.setItem("user", JSON.stringify(response));
      if (response.user.role === "admin") {
        navigate('/admin'); 
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="login-form">
        <div className="img">
          <img src={images.logo} alt="Logo" />
        </div>
        <p>The social constructive learning tool</p>
        <div className="btn-first">
          <button>
            <img src="https://tse3.mm.bing.net/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&pid=Api&P=0&h=180" alt="Google Login" />
            <span>Đăng nhập bằng Google</span>
          </button>
          <button>
            <span>Sign in FEID</span>
            <img src={images.logo} alt="FEID Logo" />
          </button>
        </div>
        <div className="info">
          <p>
            Kiểm tra xem thiết bị hiện tại có bật <span>VPN</span> không . Vui
            lòng tắt nó đi.<br />
            Nếu thông báo <span>"LỖI ĐÃ XẢY RA"</span> xuất hiện khi đăng nhập:
            <br /> 
            <span>1: Tham khảo hướng dẫn trong Câu hỏi thường gặp.</span>
            <br /> 
            <span>
              2: Kiểm tra điện thoại di động của bạn xem bạn có thể truy cập hệ
              thống không?.<br /> Nếu không thành công, hãy mang thiết bị của
              bạn đến phòng CNTT
            </span>
          </p>
        </div>
        <div className="form-auth">
          <form onSubmit={handleLogin}>
            <p>
              Chọn một cơ sở trước khi đăng nhập vào hệ thống bằng tên người
              dùng
            </p>
            <select name="campusCode" value={account.campusId} onChange={handleOnchange}>
              {campus.map((ca) => (
                <option key={ca.id} value={ca.id}>{ca.name}</option>
              ))}
            </select>
            <div className="input-form">
              <label>
                <span>Email (fpt):</span>
                <input name="email" onChange={handleOnchange} value={account.email} type="email" /> 
              </label>
            </div>
            <div className="input-form">
              <label>
                <span>Mật Khẩu:</span>
                <input name="password" onChange={handleOnchange} value={account.password} type="password" /> 
              </label>
            </div>
            <button type="submit">ĐĂNG NHẬP</button>
          </form>
          <div className="support">
            <p>Khi hệ thống quá tải và quay hãy f5 và đăng nhập lại</p>
            <p className="xanh">CÂU HỎI THƯỜNG GẶP</p>
            <p className="xanh">BỘ TRỢ GIÚP CNTT - ĐIỆN THOẠI: +84386828929</p>
            <p>Bản quyền © của HaiNVTHE172670@fpt.edu.vn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAuth;
