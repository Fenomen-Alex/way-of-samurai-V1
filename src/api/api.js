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
  follow (userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},).then( res => res.data);
  },
  unfollow (userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},).then( res => res.data);
  }
}

export const profileAPI = {
  getUser (userId) {
    return instance.get(`profile/` + userId)
      .then( res => res.data);
  },
  getStatus (userId) {
    return instance.get(`profile/status/` + userId)
  },
  updStatus (status) {
    return instance.put(`profile/status`, { status })
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile );
  }
}

export const authAPI = {
  me() { return instance.get(`auth/me`).then(res=> res.data); },
  login( email, password, rememberMe = false, captcha = null )
  { return instance.post(`auth/login`, { email, password, rememberMe, captcha }); },
  logout() { return instance.delete(`auth/login`); }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
