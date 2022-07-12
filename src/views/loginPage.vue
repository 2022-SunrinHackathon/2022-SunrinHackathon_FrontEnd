<template>
  <div class="page login-page">

    <h1>환영합니다. 로그인을 해주세요.</h1>

    <form method="post">
      <label>이메일 : <input></label>
      <label>비밀번호 : <input></label>
      <button>로그인</button>
      <div class="register-wrap">
        <span>회원가입</span>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "loginPage.vue"
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
  max-width: 700px;

  border: 1px solid #bdbdbd;
  margin-top: 32px;
  padding: 20px;
  padding-bottom: 0px;

  font-size: 20px;
}

form > * {
  width: 100%;

  margin-bottom: 24px;
}

form * {
  font-size: 1em;
}

form label {
  display: block;

  display: grid;
  grid-template-columns: auto 1fr;
}

form input {
  padding: 4px;
  margin-left: 12px;
}

.register-wrap {
  display: flex;
  justify-content: flex-end;
}
</style>