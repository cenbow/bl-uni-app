import {
  GET_PRODUCTS,
  GET_CATEGORIES
} from '../mutation-types';

import {
  reqProducts,
  reqCategories
} from "../../api/products";

export const getProducts = async ({ commit, state }, data) => {
  // 如果此用户不是会员
  console.log(data);
  if (data.status !== 2 && state.page === 2) {
    return
  }

  let { page, total } = state;
  if (Math.ceil(total / 10) < page) {
    return
  }
  let res = await reqProducts(data);
  if (res.code === 200) {
    commit(GET_PRODUCTS, res.data);
  }
};

export const getCategories = async ({ commit }) => {
  let res = await reqCategories();
}
