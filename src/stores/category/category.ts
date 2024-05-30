import { defineStore } from "pinia";
import { categoryServices } from "@/services/category";
import { categoryUtils } from "@/utils/category";

export interface Category {
  label: string;
  image: string;
  name: string;
}

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: null as Array<Category> | null,
    loading: false as boolean,
  }),

  actions: {
    async setCategories() {
      try {
        this.loading = true;
        const categories = await categoryServices.getCategories();
        const transformedCategories = categoryUtils.transformData(categories);
        this.categories = transformedCategories;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
