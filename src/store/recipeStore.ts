import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Recipe, Category, SearchFilters, RecipeStore } from '../types';

const defaultCategories: Category[] = [
  { id: '1', name: 'Ana Yemek', color: '#3B82F6', icon: '🍽️' },
  { id: '2', name: 'Çorba', color: '#10B981', icon: '🥣' },
  { id: '3', name: 'Salata', color: '#F59E0B', icon: '🥗' },
  { id: '4', name: 'Tatlı', color: '#EF4444', icon: '🍰' },
  { id: '5', name: 'İçecek', color: '#8B5CF6', icon: '🥤' },
  { id: '6', name: 'Kahvaltı', color: '#F97316', icon: '🍳' },
];

const defaultSearchFilters: SearchFilters = {
  query: '',
  category: '',
  difficulty: '',
  maxCookingTime: 0,
  minRating: 0,
};

export const useRecipeStore = create<RecipeStore>()(
  persist(
    (set, get) => ({
      // Initial state
      recipes: [],
      categories: defaultCategories,
      searchFilters: defaultSearchFilters,
      isLoading: false,
      error: null,

      // Recipe actions
      addRecipe: (recipeData) => {
        const newRecipe: Recipe = {
          ...recipeData,
          id: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
          isFavorite: false,
        };
        
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        }));
        
        get().saveToLocalStorage();
      },

      updateRecipe: (id, updates) => {
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id
              ? { ...recipe, ...updates, updatedAt: new Date() }
              : recipe
          ),
        }));
        
        get().saveToLocalStorage();
      },

      deleteRecipe: (id) => {
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        }));
        
        get().saveToLocalStorage();
      },

      toggleFavorite: (id) => {
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id
              ? { ...recipe, isFavorite: !recipe.isFavorite }
              : recipe
          ),
        }));
        
        get().saveToLocalStorage();
      },

      setRating: (id, rating) => {
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, rating } : recipe
          ),
        }));
        
        get().saveToLocalStorage();
      },

      // Category actions
      addCategory: (categoryData) => {
        const newCategory: Category = {
          ...categoryData,
          id: uuidv4(),
        };
        
        set((state) => ({
          categories: [...state.categories, newCategory],
        }));
        
        get().saveToLocalStorage();
      },

      updateCategory: (id, updates) => {
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === id ? { ...category, ...updates } : category
          ),
        }));
        
        get().saveToLocalStorage();
      },

      deleteCategory: (id) => {
        set((state) => ({
          categories: state.categories.filter((category) => category.id !== id),
        }));
        
        get().saveToLocalStorage();
      },

      // Search actions
      setSearchFilters: (filters) => {
        set((state) => ({
          searchFilters: { ...state.searchFilters, ...filters },
        }));
      },

      clearSearchFilters: () => {
        set({ searchFilters: defaultSearchFilters });
      },

      // Utility actions
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),

      // Data persistence
      saveToLocalStorage: () => {
        const state = get();
        localStorage.setItem('tarif-defteri-state', JSON.stringify({
          recipes: state.recipes,
          categories: state.categories,
        }));
      },

      loadFromLocalStorage: () => {
        try {
          const saved = localStorage.getItem('tarif-defteri-state');
          if (saved) {
            const { recipes, categories } = JSON.parse(saved);
            set({ recipes, categories });
          }
        } catch (error) {
          console.error('Failed to load from localStorage:', error);
          set({ error: 'Veri yüklenirken hata oluştu' });
        }
      },

      exportData: () => {
        const state = get();
        return JSON.stringify({
          recipes: state.recipes,
          categories: state.categories,
          exportDate: new Date().toISOString(),
        }, null, 2);
      },

      importData: (data) => {
        try {
          const imported = JSON.parse(data);
          if (imported.recipes && imported.categories) {
            set({
              recipes: imported.recipes,
              categories: imported.categories,
            });
            get().saveToLocalStorage();
            set({ error: null });
          } else {
            throw new Error('Geçersiz veri formatı');
          }
        } catch (error) {
          console.error('Failed to import data:', error);
          set({ error: 'Veri içe aktarılırken hata oluştu' });
        }
      },
    }),
    {
      name: 'tarif-defteri-storage',
      partialize: (state) => ({
        recipes: state.recipes,
        categories: state.categories,
      }),
    }
  )
); 