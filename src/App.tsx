import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import { Button, Card } from './components';
import './App.css';

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
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Hoş Geldiniz! 🎉
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Tarif defteri uygulaması başarıyla kuruldu. Şimdi component'leri geliştirmeye başlayabiliriz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">✅ Proje Kurulumu</h3>
                <p className="text-neutral-600 mb-4">Vite + React + TypeScript + Tailwind CSS</p>
                <Button variant="outline" size="sm">Detaylar</Button>
              </Card>
              
              <Card>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">🔧 State Management</h3>
                <p className="text-neutral-600 mb-4">Zustand store ile recipe yönetimi</p>
                <Button variant="outline" size="sm">Detaylar</Button>
              </Card>
              
              <Card>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">📱 Responsive Design</h3>
                <p className="text-neutral-600 mb-4">Mobile-first yaklaşım</p>
                <Button variant="outline" size="sm">Detaylar</Button>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">Component Örnekleri</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
          </div>
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
