// eslint-disable-next-line no-unused-vars
import { create } from "zustand";

// eslint-disable-next-line no-unused-vars
export const useNewsStore = create((set) => ({
  hits: [],
  loading: false,
  errorMessage: "",
  fetch: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      const data = await response.json();
      console.log(data);
      set(() => ({ hits: data.hits, loading: false }));
    } catch (error) {
      set(() => ({ errorMessage: error, loading: false }));
    }
  },
}));
