// Recipe related types
export interface Recipe {
  id: string;
  title: string;
  description?: string;
  ingredients: Ingredient[];
  instructions: string[];
  category: RecipeCategory;
  difficulty: Difficulty;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  image?: string; // base64 encoded image
  tags: string[];
  isFavorite: boolean;
  rating?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: Unit;
  notes?: string;
}

export enum Unit {
  GRAM = 'g',
  KILOGRAM = 'kg',
  MILLILITER = 'ml',
  LITER = 'l',
  PIECE = 'adet',
  CUP = 'bardak',
  TABLESPOON = 'yemek kaşığı',
  TEASPOON = 'çay kaşığı',
  PINCH = 'tutam',
  TO_TASTE = 'damak zevkine göre'
}

export enum RecipeCategory {
  MAIN_DISH = 'Ana Yemek',
  SOUP = 'Çorba',
  SALAD = 'Salata',
  APPETIZER = 'Meze',
  DESSERT = 'Tatlı',
  BREAD = 'Ekmek',
  BREAKFAST = 'Kahvaltı',
  SNACK = 'Atıştırmalık',
  BEVERAGE = 'İçecek',
  SAUCE = 'Sos',
  OTHER = 'Diğer'
}

export enum Difficulty {
  EASY = 'Kolay',
  MEDIUM = 'Orta',
  HARD = 'Zor'
}

// Search and filter types
export interface SearchFilters {
  query: string;
  category?: RecipeCategory;
  difficulty?: Difficulty;
  maxPrepTime?: number;
  maxCookTime?: number;
  ingredients?: string[];
  tags?: string[];
}

export interface SearchResult {
  recipes: Recipe[];
  totalCount: number;
  filters: SearchFilters;
}

// UI State types
export interface AppState {
  recipes: Recipe[];
  categories: RecipeCategory[];
  searchFilters: SearchFilters;
  currentRecipe?: Recipe;
  isLoading: boolean;
  error?: string;
  theme: Theme;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

// Form types
export interface RecipeFormData {
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  category: RecipeCategory;
  difficulty: Difficulty;
  prepTime: number;
  cookTime: number;
  servings: number;
  image?: File;
  tags: string[];
}

// Local storage types
export interface StorageData {
  recipes: Recipe[];
  settings: AppSettings;
  lastBackup: Date;
}

export interface AppSettings {
  theme: Theme;
  language: string;
  autoSave: boolean;
  backupFrequency: number; // in days
  maxRecipes: number;
}

// Export/Import types
export interface ExportData {
  recipes: Recipe[];
  exportDate: Date;
  version: string;
}

// API Response types (for future use)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  children?: NavigationItem[];
} 