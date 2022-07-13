<template>
  <div class="page register">

    <h1>회원가입</h1>
    <div class="msg">회원가입 하실 정보를 입력해주세요.</div>


    <label class="input-email-id">
      <h5>이메일 및 아이디</h5>
      <input type="email" placeholder="이메일 주소를 입력해주세요">
      <input type="text" placeholder="아이디 주소를 입력해주세요">
    </label>

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

.msg {
  color: #979797;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;

  margin-left: 8px;
  margin-top : 12px;
}

label {
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  display: block;

  margin-top: 20px;
}

label input:not(input[type=checkbox]) {
  margin-top: 12px;
}

</style>