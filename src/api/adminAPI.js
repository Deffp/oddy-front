import axios from 'axios';

import { API_BASE_URL } from "../config";

class adminAPI {
  instance = axios.create({ 
    baseURL: API_BASE_URL, 
    headers: { Authorization: sessionStorage.getItem('token') }
  });

  async getGoogleAuthURL() {
    const response = await this.instance('/google/authUrl');
    const { authUrl } = response.data;
    return authUrl;
  }

  async getAccessToken(code) {
    const response = await this.instance.post('/access_token', { code });
    const token = response.data.token;
    return token;
  }

  async getAdmins() {
    const response = await this.instance('/admins');
    const { adminList } = response.data;
    return adminList;
  }

  async addingAdmin(admin) {
    const newAdmin = await this.instance.post('/admins', {
      email: admin,
    });
    return newAdmin;
  }

  async removeAdmin(admin) {
    const removeAdmin = await this.instance.delete('/admins', {
      data: {
        email: admin,
      }
    });
    return removeAdmin;
  } 
}

export default new adminAPI();
