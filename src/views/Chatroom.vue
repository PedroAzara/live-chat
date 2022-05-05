<template>
<div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />

</div>
  
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser"
import { watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
    components: { Navbar, Navbar, getUser, NewChatForm, ChatWindow },
    setup(){
        const {user} = getUser()
        const router = useRouter()

        watch(user, ()=>{
            if (!user.value){
                router.push({name: 'Welcome'})
            }
        }) 

        return {user}
    }
}
</script>

<style>


</style>