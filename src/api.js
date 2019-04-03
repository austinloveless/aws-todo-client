import axios from "axios";
const baseUrl =
  "https://jcd0t3avu0.execute-api.us-east-1.amazonaws.com/production/todos";
export async function getTodos() {
  return axios.get(baseUrl).then(response => {
    return response.data;
  });
}

export async function createTodo(content) {
  return axios.post(baseUrl, { content });
}

export async function removeTodo(todoId) {
  const deleteURL = `${baseUrl}/${todoId}`;
  return axios.delete(deleteURL);
}

export async function updateTodo(todoId) {
  const updateURL = `${baseUrl}/${todoId}`;
  return axios.put(updateURL);
}
