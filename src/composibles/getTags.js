import { ref } from "vue";
import axios from "axios";

const url = "http://127.0.0.1:8080/wp-json/wp/v2/tags?per_page=100";
const getTags = () => {
  const tags = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url);
      tags.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { tags, load };
};

export default getTags;
