<template>
  <div class="page login-page bottom-navi-page">
    <Header/>

    <div class="panel">
      <button @click="fin1">클릭</button>
    </div>

    <BottomNavi/>


  </div>
</template>

<script>
import BottomNavi from "@/components/BottomNavi";
import Header from "@/views/Header";

import { db } from "@/firebase"
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "loginPage.vue",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    }
  },
  methods : {
    async fin1(){
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    }
  },
  components: {
    Header,
    BottomNavi
  }
}
</script>

<style scoped>

header {
  padding : 16px 8px;

  display: flex;
  justify-content: space-between;
}

header h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #6F8BEC;

  display: inline;
}

</style>

<style scoped>

.bottom-navigation .link img {
  width: 30px;
}

.bottom-navigation .link div {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: center;

  color: #858992;
}

</style>