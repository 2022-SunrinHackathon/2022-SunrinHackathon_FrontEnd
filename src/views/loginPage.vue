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
      </div>

      <button class="login">로그인</button>
    </div>

    <div class="signup">계정이 없으신가요? <b>회원가입</b>하기</div>
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

  margin-top: 160px;
}

.login-msg {
  color: #979797;
  font-size: 18px;
  font-weight: 500;

  margin-top: 10px;
}

.login-box {
  margin-top: 57px;
}

.login-box label {
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  display: block;

  margin-top: 20px;
}

.login-box label input:not(input[type=checkbox]) {
  margin-top: 12px;
}


.login-tool-wrap > *{
  display: inline;
}

.login-box label.remember-password {
  color: #444444;
  font-weight: 600;
  font-size: 16px;
}

.login-box label.remember-password input {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.find-password {
  font-weight: 600;
  font-size: 16px;

  text-align: right;

  color: #000000;
}

button.login {
  margin-top: 43px;
}

.signup {
  text-align: center;

  margin-top: 25px;
}

</style>