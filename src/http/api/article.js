import axiosService from "../index";
// 根据所属菜单id获取文章列表
export const getArticleList = (params) => {
  return axiosService({
    url: "/api/article/getArticleList",
    method: "get",
    params,
  });
};
// 发布文章
export const publishArticle = (data) => {
  return axiosService({
    url: "/api/article/publishArticle",
    method: "post",
    data,
  });
};
// 根据id获取文章内容
export const getArticle = (params) => {
  return axiosService({
    url: "/api/article/getArticle",
    method: "get",
    params,
  });
};

// 点赞文章
export const likeArticle = (data) => {
  return axiosService({
    url: "/api/article/likeArticle",
    method: "post",
    data,
  });
};

// 取消点赞文章
export const cancelLikeArticle = (data) => {
  return axiosService({
    url: "/api/article/cancelLikeArticle",
    method: "put",
    data,
  });
};
