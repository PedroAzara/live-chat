import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user) => {
    console.log('User state changed. Current user is: ' + _user)
    user.value = _user
})

const getUser = () => {
    return {user}
}

export default getUser