import React from 'react';
import { Recipe, RecipeCategory, Difficulty } from '../../types';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/Card';
import Button from '../ui/Button';

export interface RecipeCardProps {
  recipe: Recipe;
  onView?: (recipe: Recipe) => void;
  onEdit?: (recipe: Recipe) => void;
  onDelete?: (recipe: Recipe) => void;
  onToggleFavorite?: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onView,
  onEdit,
  onDelete,
  onToggleFavorite
}) => {
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case Difficulty.EASY:
        return 'badge-success';
      case Difficulty.MEDIUM:
        return 'badge-secondary';
      case Difficulty.HARD:
        return 'badge-primary';
      default:
        return 'badge-primary';
    }
  };

  const getCategoryColor = (category: RecipeCategory) => {
    switch (category) {
      case RecipeCategory.MAIN_DISH:
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200';
      case RecipeCategory.SOUP:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case RecipeCategory.SALAD:
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case RecipeCategory.DESSERT:
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case RecipeCategory.BREAKFAST:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200';
    }
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} dk`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}s ${remainingMinutes}dk` : `${hours}s`;
  };

  return (
    <Card className="h-full flex flex-col">
      {/* Recipe Image */}
      {recipe.image && (
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-1 bg-white/80 hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800"
              onClick={() => onToggleFavorite?.(recipe)}
            >
              {recipe.isFavorite ? (
                <svg className="h-5 w-5 text-red-500 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="line-clamp-2 mb-2">{recipe.title}</CardTitle>
            {recipe.description && (
              <CardDescription className="line-clamp-2 text-sm">
                {recipe.description}
              </CardDescription>
            )}
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          <span className={`badge ${getCategoryColor(recipe.category)} text-xs`}>
            {recipe.category}
          </span>
          <span className={`badge ${getDifficultyColor(recipe.difficulty)} text-xs`}>
            {recipe.difficulty}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Recipe Info */}
        <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Hazırlık: {formatTime(recipe.prepTime)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pişirme: {formatTime(recipe.cookTime)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{recipe.servings} kişilik</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>{recipe.ingredients.length} malzeme</span>
          </div>
        </div>

        {/* Rating */}
        {recipe.rating && (
          <div className="flex items-center space-x-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < recipe.rating! ? 'text-yellow-400 fill-current' : 'text-neutral-300'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-neutral-600 dark:text-neutral-400 ml-1">
              ({recipe.rating}/5)
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex space-x-2">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={() => onView?.(recipe)}
        >
          Görüntüle
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit?.(recipe)}
        >
          Düzenle
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete?.(recipe)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard; 