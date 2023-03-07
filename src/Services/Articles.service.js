import api from "./Index"

const getArticlesList = async () => {
  return await api.get(
    "articles"
  )
    .then((response) => {
      return response?.data
    })
}

const addLikes = async (data) => {
  // console.log(999, data)
  const { id, likes } = data
  const body = JSON.stringify({ likes: likes + 1 })
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  return await api
    .patch(
      `articles/${id}`,
      body,
      config
    )
    .then((response) => {
      console.log("res",response)
      return response?.data
    });
};

const addDislikes = async (data) => {
  const { id, dislikes } = data
  const body = JSON.stringify({ dislikes: dislikes + 1 })
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  return await api
    .patch(
      `articles/${id}`,
      body,
      config
    )
    .then((response) => {
      return response?.data
    });

  // const res = await fetch(`http://localhost:8000/articles/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({likes:likes+1}),
  // });
  // console.log(444,res)
};

const articleService = {
  getArticlesList,
  // getComments,
  addLikes,
  addDislikes,
  // addComments
}

export default articleService;