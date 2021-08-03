import http from "./axiosHttp";

const getAll = () => {
    return http.get("/products");
};

const get = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products", data);
};

const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};

const remove = id => {
    return http.delete(`/products/${id}`);
};

const getAllCategory = () => {
    return http.get("/category");
};

const removeCategory = id => {
    console.log(id);
    return http.delete(`/category/${id}`);
};

const createCategory = data => {
    return http.post("/category", data);
};

const getCategory = id => {
    return http.get(`/category/${id}`);
};

const searchCategory = key => {
    return http.get(`/products?search=${key}`);
};

const updateCategory = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const getAllPage = (page, limit) => {
    return http.get(`/products?page=${page}&limit=${limit}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    getAllCategory,
    removeCategory,
    createCategory,
    getCategory,
    updateCategory,
    searchCategory,
    getAllPage,
};