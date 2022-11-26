import { ref } from "vue";
import axios from "axios";

import "@/plugins/wp-stackable.js";

const url = "https://api.alexbednov.work/wp-json/wp/v2/posts/";
const getPost = (id) => {
  const post = ref({});

  const load = async () => {
    try {
      let { data } = await axios(url + id);
      post.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return { post, load };
};

export default getPost;
