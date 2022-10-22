import { ref } from "vue";
import axios from 'axios'

const url = "http://127.0.0.1:8080/wp-json/wp/v2/posts?per_page=100&categories="

const getPosts = (cat) => {
    const posts = ref([]);

    const load = async () => {
        try {
            let { data } = await axios(url + cat)
            posts.value = data
        } catch (error) {
            console.log(error)
        }
    }

    return { posts, load }
}

export default getPosts