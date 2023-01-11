const BASE_URL = "https://swapi.dev/api";
import axios from "axios";

async function getItems(item: string) {
  const query = `${BASE_URL}/${item}`;
  try {
    const response = await axios.get(query);
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
}

async function getItem(item: string, index: string) {
  const query = `${BASE_URL}/${item}/${index}`;
  try {
    const response = await axios.get(query);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getFilms() {
  return await getItems("films");
}

export async function getFilm(index: string) {
  return await getItem("films", index);
}
