import { ref } from "vue";
import axios from 'axios'

import '../plugins/wp-stackable.js'

const url = "http://127.0.0.1:8080/wp-json/wp/v2/pages/"
const getContacts = (id) => {
    const contacts = ref([]);
    const load = async () => {
        try {
            let { data } = await axios(url + id)
            contacts.value = data
        } catch (error) {
            console.log(error)
        }
    }
    return { contacts, load }
}

export default getContacts