import { ref } from "vue";
import axios from 'axios'

import '../plugins/wp-stackable.js'

const url = "http://127.0.0.1:8080/wp-json/wp/v2/"
const getPage = (type, id) => {
    const page = ref([]);
    const load = async () => {
        try {
            let { data } = await axios(url + type + '/' + id)
            page.value = data
        } catch (error) {
            console.log(error)
        }
    }
    return { page, load }
}

export default getPage