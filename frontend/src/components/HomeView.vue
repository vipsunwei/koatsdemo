<template>
  <div class="box">
    <div v-for="(item, index) in homeList" :key="index">
      <img class="mona-images" :src="item?.image" />
      <div class="haiku-containers">
        <p class="haikus">{{ item?.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { HomeItem, home } from '../api/home'
import { User, users } from '../api/users'

const homeList: Ref<HomeItem[]> = ref([])

const getHomeList = async () => {
  const result = await home()
  console.log(result)
  homeList.value = [...result]
}

const userList: Ref<User[]> = ref([])

const getUserList = async () => {
  const result = await users()
  userList.value = [...result]
}

const mounted = async () => {
  getHomeList()
  getUserList()
}
onMounted(mounted)
</script>

<style scoped>
.box {
  width: 400px;
  margin: 0 auto;
}
</style>
