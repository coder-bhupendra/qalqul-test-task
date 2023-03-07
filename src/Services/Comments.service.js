import api from "./Index";


  const getComments = async () => {
    return await api.get(
      "comments"
    )
      .then((response) => {
      return response?.data 
    })
  }


  const addComments = async (data) => {
    console.log("data", data)
    try {
      const response = await api.post("comments", data);
      return response.data
      console.log(777,response.data); // logs the newly added comment object
    } catch (error) {
      console.error(999,error);
    }
    // const { commentText }= data
    // // const body= JSON.stringify({author: "John",id: 3,text: commentText})
    // const body= JSON.stringify(commentText)
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };
    // return await api
    //   .post(
    //     `articles/${1}/comments`,
    //     body
    //   )
    //   .then((response) => { 
    // // return response?.data
    //   });
  };  

  const commentService= {
    getComments,
    addComments
  }

  export default commentService;