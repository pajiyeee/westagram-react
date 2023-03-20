import React from "react";
import "./Login.css";

function LoginForm() {
  return (
    <div className="loginbody">
      <div className="container">
        <div className="contents">
          <h1 className="logo_text">westagram</h1>

          <form className="input_set">
            <input
              className="input_id"
              type="text"
              placeholder="전화번호, 사용자 이메일 또는 이메일"
            />
            <input class="input_pw" type="password" placeholder="비밀번호" />
          </form>

          <button
            id="btn_login"
            className="btn_login_on btn_login_off"
            disabled="disabled"
          >
            로그인
          </button>
          <button className="btn_text">비밀번호를 잊으셨나요?</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
