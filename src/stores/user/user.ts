import { defineStore } from "pinia";
import { userServices, type User } from "@/services/user";

export interface Login {
  username: string;
  password: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userData: null as User | null,
    loading: false as boolean,
    errorMessage: null as string | null,
  }),

  actions: {
    async login(login: Login) {
      try {
        this.loading = true;
        if (!login.username) {
          this.errorMessage = "Nome de usuário é obrigatório";
          return;
        } else if (!login.password) {
          this.errorMessage = "Senha é obrigatório";
          return;
        }
        const token = await userServices.login(login);
        localStorage.setItem("token", token);
        this.setUser(token);
      } catch (error) {
        this.errorMessage =
          "Ocorreu um erro inesperado. Tente novamente mais tarde.";
      } finally {
        this.loading = false;
      }
    },

    async setUser(token: string) {
      if (!token) return;
      const userData = await userServices.getUserInfo(1);
      this.userData = userData;
    },

    logout() {
      this.userData = null;
      localStorage.removeItem("token");
    },
  },
});
