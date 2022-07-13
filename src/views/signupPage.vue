<template>
  <div class="page signup-page">

    <h1>회원가입</h1>
    <div class="msg">회원가입 하실 정보를 입력해주세요.</div>

    <main>
      <label class="email input-field">
        <h5>이메일/아이디</h5>
        <input type="email" placeholder="이메일 주소를 입려개주세요" v-model="inputEmail">
        <input type="text" placeholder="아이디를 입력해주세요" v-model="inputId">

      </label>

      <label class="password input-field">
        <h5>비밀번호</h5>
        <input type="password" class="pw-first" placeholder="비밀번호를 입력해주세요(8자리 이상)" v-model="inputPassword">
        <input type="password" class="pw-second" placeholder="비밀번호를 확인해주세요" v-model="inputPasswordRe">
      </label>

      <button class="login">회원가입</button>
    </main>

    <div class="login">
      이미 회원이신가요? <span class="goto-login cr-p" @click="$router.push({ name : 'login' })">로그인하기</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage.vue",
  data(){
    return {
      inputEmail : "",
      inputId : "",

      inputPassword : "",
      inputPasswordRe : "",
    }
  }
}
</script>

<style scoped>
.signup-page {
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

.login {
  text-align: center;
  margin-top: 40px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
}

.goto-login {
  color: #5465A1;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
}

</style>