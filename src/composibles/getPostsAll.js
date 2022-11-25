import { ref } from "vue";
import axios from "axios";

const url = "https://api.alexbednov.work/wp-json/wp/v2/posts?per_page=100";
const getPage = () => {
  const posts = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url);
      posts.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { posts, load };
};

export default getPage;
