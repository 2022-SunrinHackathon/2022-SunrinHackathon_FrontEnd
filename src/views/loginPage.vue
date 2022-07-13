<template>
  <div class="page login-page">

    <h1>로그인</h1>
    <div class="msg">로그인할 정보를 입력해주세요.</div>

    <main>
      <label class="email input-field">
        <h5>이메일/아이디</h5>
        <input type="text" placeholder="이메일 주소/ 아이디를 입력해주세요">
      </label>

      <label class="password input-field">
        <h5>비밀번호</h5>
        <input type="password" placeholder="비밀번호를 입력해주세요">
      </label>

      <div class="login-tools">
        <label class="memory-password">
          <input type="checkbox"> 비밀번호 기억하기
        </label>

        <div class="find-password cr-p">비밀번호/아이디 찾기</div>
      </div>

      <button class="login">로그인</button>
    </main>

    <div class="signup">
      계정이 없으신가요? <span class="goto-signup cr-p">회원가입하기</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage.vue"
}
</script>

<style scoped>
.login-page {
  padding-top: 135px;
}
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 44px;
  /* identical to box height */

  color: #000000;
}

.msg {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #979797;

  margin-top : 12px;
}

main {
  margin-top: 84px;
}

label {
  display: block;
  cursor: pointer;
}

label h5 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #000000;
}

.input-field input {
   margin-top : 12px;
}

.input-field {
  margin-top : 24px;
}

.login-tools {
  margin-top: 32px;

  display: flex;
  justify-content: space-between;
}

.login-tools > * {
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
}

.memory-password {
  color: #444444;
}

.find-password {
  color: #5465A1;
}

button.login {
  margin-top: 43px;
}

.signup {
  text-align: center;
  margin-top: 40px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
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