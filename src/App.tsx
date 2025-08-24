import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import RecipeCard from './components/features/RecipeCard';
import { sampleRecipes } from './data/sampleRecipes';
import { Recipe } from './types';
import './index.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleToggleFavorite = (recipe: Recipe) => {
    setRecipes(prev => 
      prev.map(r => 
        r.id === recipe.id 
          ? { ...r, isFavorite: !r.isFavorite }
          : r
      )
    );
  };

  const handleViewRecipe = (recipe: Recipe) => {
    console.log('Viewing recipe:', recipe.title);
    // TODO: Navigate to recipe detail page
  };

  const handleEditRecipe = (recipe: Recipe) => {
    console.log('Editing recipe:', recipe.title);
    // TODO: Open edit modal or navigate to edit page
  };

  const handleDeleteRecipe = (recipe: Recipe) => {
    if (confirm(`${recipe.title} tarifini silmek istediğinizden emin misiniz?`)) {
      setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    }
  };

  const favoriteRecipes = recipes.filter(r => r.isFavorite);
  const recentRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <Header onThemeToggle={toggleTheme} theme={theme} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            🍳 Tarif Defteri'ne Hoş Geldiniz!
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Kişisel yemek tariflerinizi dijital ortamda saklayın, organize edin ve kolayca erişin. 
            Modern ve kullanıcı dostu arayüz ile tarif yönetimi artık çok kolay!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {/* Feature Card 1 */}
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Tarif Ekleme</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Yeni tariflerinizi kolayca ekleyin ve organize edin
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Akıllı Arama</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tarif adı, malzeme veya kategori bazlı hızlı arama
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Saklama</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Verileriniz cihazınızda güvenle saklanır
              </p>
            </div>
          </div>
          
          <button className="btn-primary text-lg px-8 py-3">
            İlk Tarifinizi Ekleyin
          </button>
        </div>

        {/* Favorites Section */}
        {favoriteRecipes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              ⭐ Favori Tarifleriniz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onView={handleViewRecipe}
                  onEdit={handleEditRecipe}
                  onDelete={handleDeleteRecipe}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* Recent Recipes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            🕒 Son Eklenen Tarifler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={handleViewRecipe}
                onEdit={handleEditRecipe}
                onDelete={handleDeleteRecipe}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>

        {/* All Recipes Section */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            📚 Tüm Tarifler ({recipes.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={handleViewRecipe}
                onEdit={handleEditRecipe}
                onDelete={handleDeleteRecipe}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
