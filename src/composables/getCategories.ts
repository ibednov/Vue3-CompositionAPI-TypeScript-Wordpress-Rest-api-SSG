import { ref } from 'vue';
import axios from 'axios';

const url = 'https://api.alexbednov.work/wp-json/wp/v2/categories?per_page=100';
const getCategories = () => {
  const categories = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url);
      categories.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { categories, load };
};

export default getCategories;
