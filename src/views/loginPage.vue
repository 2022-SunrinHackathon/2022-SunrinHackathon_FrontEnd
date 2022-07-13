<template>
  <div class="page login-page">

    <h1>로그인</h1>
    <div class="login-msg">로그인할 정보를 입력해주세요.</div>

    <div class="login-box">
      <label class="email">
        <h3>이메일</h3>
        <input type="email" placeholder="이메일 주소를 입력해주세요">
      </label>

      <label class="password">
        <h3>비밀번호</h3>
        <input type="password" placeholder="비밀번호를 입력해주세요.">
      </label>

      <div class="login-tool-wrap">
        <label class="remember-password">
          <input type="checkbox"> 비밀번호 기억하기
        </label>

        <div class="find-password">비밀번호/아이디 찾기</div>

      </div>

      <button class="login">로그인</button>

<!--      <button class="google-login"><img src="src/assets/login/google_logo.svg" alt="구글 로고">Google로 로그인</button>-->
    </div>

    <div class="signup">계정이 없으신가요? <span class="goto-signup">회원가입하기</span></div>
  </div>
</template>

<script>
export default {
  name: "loginPage.vue"
}
</script>

<style scoped>
h1 {
  font-size: 35px;

  margin-top: 135px;
  margin-left: 8px;
}

.login-msg {
  color: #979797;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  margin-left: 8px;
  margin-top : 12px;
}

.login-box {
  margin-top: 57px;
}

.login-box > label {
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  display: block;

  margin-top: 20px;
}

.login-box label input:not(input[type=checkbox]) {
  margin-top: 12px;
}

.login-tool-wrap {
  display: flex;
  justify-content: space-between;

  margin-top: 32px;
}

.login-tool-wrap > * {
  display: inline;
}

.login-box .remember-password {
  color: #444444;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.login-box .remember-password input {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.find-password {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: right;

  color: #5465A1;
}

button.login {
  margin-top: 43px;
}

button.google-login {
  color: #6B6B6B;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  background-color: #fff;

  border: 1px solid #D2D2D2;
  border-radius: 10px;
}

.signup {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;

  margin-top: 25px;
}

.goto-signup {
  color: #5465A1;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
}

</style>