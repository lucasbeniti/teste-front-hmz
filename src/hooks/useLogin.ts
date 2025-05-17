import api from "../services/api";

interface LoginData {
  email: string;
  password: string;
}

export async function login({ email, password}: LoginData) {
  const response = await api.post("/login", {
    email,
    password
  });

  const token = response.data.token;
  localStorage.setItem("token", token);

  return response.data;
}