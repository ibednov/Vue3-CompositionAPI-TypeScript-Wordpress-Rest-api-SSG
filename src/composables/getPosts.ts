import { ref } from 'vue';
import axios from 'axios';

// import '@/plugins/wp-stackable.js';

const url = 'https://api.alexbednov.work/wp-json/wp/v2/posts/';

export const getPostByID = (id:number) => {
  const post:object = ref({});
  const load:object = async () => {
    try {
      let { data } = await axios(url + id + '?per_page=100');
      post.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { post, load };
};

export const getPosts = () => {
  const posts:object = ref({});
  const load:object = async () => {
    try {
      let { data } = await axios(url + '?per_page=100');
      posts.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { posts, load };
};

export const getPostsByCategoryID = (cat:number) => {
  const posts = ref([]);

  const load = async () => {
    try {
      let { data } = await axios(url + '?per_page=100' + '&categories=' + cat);
      posts.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { posts, load };
};