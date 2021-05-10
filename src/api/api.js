import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e58ff2be-7f0b-4ed0-b27a-a0d72a869424"
  }
})
export const usersAPI = {
  getUsers ( currentPage, pageSize ) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  getUser (userId) {
    return instance.get(`profile/` + userId)
      .then( res => res.data);
  },
  follow (userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},).then( res => res.data);
  },
  unfollow (userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},).then( res => res.data);
  }
}

export const getAuthMe = () => {
  return instance.get(`auth/me`).then(res=> res.data);
}
