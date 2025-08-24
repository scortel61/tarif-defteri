import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import './App.css';

// Lazy load pages for better performance
const HomePage = () => import('./pages/HomePage');
const RecipeDetailPage = () => import('./pages/RecipeDetailPage');
const AddRecipePage = () => import('./pages/AddRecipePage');
const EditRecipePage = () => import('./pages/EditRecipePage');

function App() {
  const { loadFromLocalStorage } = useRecipeStore();

  // Load data from localStorage on app start
  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <header className="bg-white shadow-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary-600">
                  🍳 Tarif Defteri
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Ana Sayfa
                </a>
                <a href="/add-recipe" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Yeni Tarif
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/add-recipe" element={<AddRecipePage />} />
            <Route path="/edit-recipe/:id" element={<EditRecipePage />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-neutral-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-neutral-600">
              <p>&copy; 2024 Tarif Defteri. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
