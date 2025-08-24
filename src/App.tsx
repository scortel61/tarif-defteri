import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import './index.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <Header onThemeToggle={toggleTheme} theme={theme} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            🍳 Tarif Defteri'ne Hoş Geldiniz!
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Kişisel yemek tariflerinizi dijital ortamda saklayın, organize edin ve kolayca erişin. 
            Modern ve kullanıcı dostu arayüz ile tarif yönetimi artık çok kolay!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
          
          <div className="mt-12">
            <button className="btn-primary text-lg px-8 py-3">
              İlk Tarifinizi Ekleyin
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
