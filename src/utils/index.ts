import { Recipe, SearchFilters } from '../types';

// Recipe filtering utilities
export const filterRecipes = (recipes: Recipe[], filters: SearchFilters): Recipe[] => {
  return recipes.filter((recipe) => {
    // Text search
    if (filters.query) {
      const searchQuery = filters.query.toLowerCase();
      const matchesTitle = recipe.title.toLowerCase().includes(searchQuery);
      const matchesDescription = recipe.description.toLowerCase().includes(searchQuery);
      const matchesIngredients = recipe.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchQuery)
      );
      
      if (!matchesTitle && !matchesDescription && !matchesIngredients) {
        return false;
      }
    }

    // Category filter
    if (filters.category && recipe.category !== filters.category) {
      return false;
    }

    // Difficulty filter
    if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
      return false;
    }

    // Cooking time filter
    if (filters.maxCookingTime > 0 && recipe.cookingTime > filters.maxCookingTime) {
      return false;
    }

    // Rating filter
    if (filters.minRating > 0 && (!recipe.rating || recipe.rating < filters.minRating)) {
      return false;
    }

    return true;
  });
};

// Recipe sorting utilities
export const sortRecipes = (recipes: Recipe[], sortBy: string, sortOrder: 'asc' | 'desc' = 'asc'): Recipe[] => {
  const sortedRecipes = [...recipes];
  
  switch (sortBy) {
    case 'title':
      sortedRecipes.sort((a, b) => {
        const comparison = a.title.localeCompare(b.title);
        return sortOrder === 'asc' ? comparison : -comparison;
      });
      break;
      
    case 'cookingTime':
      sortedRecipes.sort((a, b) => {
        const comparison = a.cookingTime - b.cookingTime;
        return sortOrder === 'asc' ? comparison : -comparison;
      });
      break;
      
    case 'rating':
      sortedRecipes.sort((a, b) => {
        const ratingA = a.rating || 0;
        const ratingB = b.rating || 0;
        const comparison = ratingA - ratingB;
        return sortOrder === 'asc' ? comparison : -comparison;
      });
      break;
      
    case 'createdAt':
      sortedRecipes.sort((a, b) => {
        const comparison = a.createdAt.getTime() - b.createdAt.getTime();
        return sortOrder === 'asc' ? comparison : -comparison;
      });
      break;
      
    case 'updatedAt':
      sortedRecipes.sort((a, b) => {
        const comparison = a.updatedAt.getTime() - b.updatedAt.getTime();
        return sortOrder === 'asc' ? comparison : -comparison;
      });
      break;
      
    default:
      // Default: sort by creation date (newest first)
      sortedRecipes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  return sortedRecipes;
};

// Time formatting utilities
export const formatCookingTime = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} dakika`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} saat`;
  }
  
  return `${hours} saat ${remainingMinutes} dakika`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) {
    return 'Az önce';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} dakika önce`;
  } else if (diffInHours < 24) {
    return `${diffInHours} saat önce`;
  } else if (diffInDays < 7) {
    return `${diffInDays} gün önce`;
  } else {
    return formatDate(date);
  }
};

// String utilities
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.slice(0, maxLength).trim() + '...';
};

export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Validation utilities
export const validateRecipe = (recipe: Partial<Recipe>): string[] => {
  const errors: string[] = [];
  
  if (!recipe.title || recipe.title.trim().length < 3) {
    errors.push('Tarif başlığı en az 3 karakter olmalıdır');
  }
  
  if (!recipe.description || recipe.description.trim().length < 10) {
    errors.push('Tarif açıklaması en az 10 karakter olmalıdır');
  }
  
  if (!recipe.category) {
    errors.push('Kategori seçilmelidir');
  }
  
  if (!recipe.ingredients || recipe.ingredients.length === 0) {
    errors.push('En az bir malzeme eklenmelidir');
  }
  
  if (!recipe.instructions || recipe.instructions.length === 0) {
    errors.push('En az bir hazırlama adımı eklenmelidir');
  }
  
  if (!recipe.cookingTime || recipe.cookingTime <= 0) {
    errors.push('Pişirme süresi 0\'dan büyük olmalıdır');
  }
  
  if (!recipe.servings || recipe.servings <= 0) {
    errors.push('Porsiyon sayısı 0\'dan büyük olmalıdır');
  }
  
  return errors;
};

// Local storage utilities
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key: string): any | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove from localStorage:', error);
  }
};

// File utilities
export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const downloadJSON = (data: any, filename: string): void => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}; 