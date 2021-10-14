import axiosService from "../index";
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
}