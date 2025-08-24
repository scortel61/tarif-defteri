import React from 'react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

export interface HeaderProps {
  className?: string;
  onThemeToggle?: () => void;
  theme?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ 
  className, 
  onThemeToggle, 
  theme = 'light' 
}) => {
  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-700',
      'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm',
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-lg font-bold text-white">🍳</span>
            </div>
            <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Tarif Defteri
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
            >
              Ana Sayfa
            </a>
            <a 
              href="/tarifler" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
            >
              Tarifler
            </a>
            <a 
              href="/kategoriler" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
            >
              Kategoriler
            </a>
            <a 
              href="/favoriler" 
              className="text-sm font-medium text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
            >
              Favoriler
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              leftIcon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            >
              Ara
            </Button>

            {/* Add Recipe Button */}
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:flex"
              leftIcon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            >
              Tarif Ekle
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className="p-2"
              leftIcon={
                theme === 'dark' ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )
              }
            />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              leftIcon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 