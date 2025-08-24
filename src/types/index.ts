export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number; // dakika cinsinden
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  image?: string; // base64 encoded image
  notes?: string;
  rating?: number;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface RecipeFormData {
  title: string;
  description: string;
  category: string;
  ingredients: Omit<Ingredient, 'id'>[];
  instructions: string[];
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  notes?: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  difficulty: string;
  maxCookingTime: number;
  minRating: number;
}

export interface AppState {
  recipes: Recipe[];
  categories: Category[];
  searchFilters: SearchFilters;
  isLoading: boolean;
  error: string | null;
}

export interface RecipeStore extends AppState {
  // Actions
  addRecipe: (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateRecipe: (id: string, updates: Partial<Recipe>) => void;
  deleteRecipe: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setRating: (id: string, rating: number) => void;
  
  // Category actions
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  
  // Search actions
  setSearchFilters: (filters: Partial<SearchFilters>) => void;
  clearSearchFilters: () => void;
  
  // Utility actions
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Data persistence
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
  exportData: () => string;
  importData: (data: string) => void;
} 