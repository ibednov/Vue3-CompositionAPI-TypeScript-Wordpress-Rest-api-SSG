import { ref } from "vue";
import axios from 'axios'

const url = "http://127.0.0.1:8080/wp-json/wp/v2/team/"
const getMember = (id) => {
    const member = ref([]);
    const load = async () => {
        try {
            let { data } = await axios(url + id)
            member.value = data
        } catch (error) {
            console.log(error)
        }
    }
    return { member, load }
}

export default getMember