import { ref } from "vue";
import axios from "axios";

const url = "https://api.alexbednov.work/wp-json/wp/v2/team/";
const getTeam = () => {
  const team = ref([]);
  const load = async () => {
    try {
      let { data } = await axios(url);
      team.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  return { team, load };
};

export default getTeam;
