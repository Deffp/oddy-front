import axios from 'axios';

import { API_BASE_URL } from "../config";

class adminAPI {
  instance = axios.create({ baseURL: API_BASE_URL  });

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

  async addingAdmin(admin , token) {
    const config = { headers: { Authorization: token }};
    await this.instance.post('/admins', {
      email: admin,
      config,
    });
  }

  async removeAdmin(admin, token) {
    const config = { headers: { Authorization: token }};
    await this.instance.delete('/admins', {
      data: {
        email: admin,
        config,
      }
    });
  } 
}

export default new adminAPI();
