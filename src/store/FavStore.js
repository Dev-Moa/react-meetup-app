import { create } from 'zustand'

const useFavStore = create((set) => ({
    Favs: [],
    addFav: (todo) => set((state) => ({ Favs: [...state.Favs, todo] })),
    deleteFav: (id) => set((state) => ({ Favs: state.Favs.filter((todo) => todo.id !== id) })),
}));

export default useFavStore;