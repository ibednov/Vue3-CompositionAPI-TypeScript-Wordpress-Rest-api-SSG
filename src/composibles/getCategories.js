import { ref } from "vue";
import axios from 'axios'

const url = "http://127.0.0.1:8080/wp-json/wp/v2/categories/"
const getCategories = (id) => {
    const categories = ref([]);
    const load = async () => {
        try {
            let { data } = await axios(url)
            categories.value = data
        } catch (error) {
            console.log(error)
        }
    }
    return { categories, load }
}

export default getCategories