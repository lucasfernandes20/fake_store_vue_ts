import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  state: string;
}

interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  phone: string;
}

async function login(loginInfo: {
  username: string;
  password: string;
}): Promise<string> {
  const loginUri = `${API_URL}/auth/login`;
  console.log("loginInfo", loginInfo);
  const response = await axios.post(loginUri, loginInfo);
  return response.data.token;
}

async function register(registerInfo: RegisterRequest) {
  const registerUri = `${API_URL}/users`;
  const response = await axios.post(registerUri, JSON.stringify(registerInfo));
  return response.data;
}

async function getUserInfo(id: number): Promise<User> {
  const userInfoUri = `${API_URL}/users/${id}`;
  const response = await axios.get(userInfoUri);
  return response.data;
}

export const userServices = {
  login,
  register,
  getUserInfo,
};
