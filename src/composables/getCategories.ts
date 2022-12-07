import { ref } from 'vue';
import axios from 'axios';

const url = 'https://api.alexbednov.work/wp-json/wp/v2/categories';
export const getCategories = () => {
  const categories = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url + '?per_page=100');
      categories.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { categories, load };
};

export const getCategoryByID = (id:number) => {
  const category = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url + '/' + id + '?per_page=100');
      category.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { category, load };
};

