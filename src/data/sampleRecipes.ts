import { Recipe, RecipeCategory, Difficulty, Unit } from '../types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Mercimek Çorbası',
    description: 'Geleneksel Türk mutfağının vazgeçilmez lezzeti, kırmızı mercimek çorbası.',
    ingredients: [
      { id: '1-1', name: 'Kırmızı Mercimek', amount: 200, unit: Unit.GRAM },
      { id: '1-2', name: 'Soğan', amount: 1, unit: Unit.PIECE },
      { id: '1-3', name: 'Havuç', amount: 2, unit: Unit.PIECE },
      { id: '1-4', name: 'Sarımsak', amount: 3, unit: Unit.PIECE },
      { id: '1-5', name: 'Tereyağı', amount: 2, unit: Unit.TABLESPOON },
      { id: '1-6', name: 'Tuz', amount: 1, unit: Unit.TEASPOON },
      { id: '1-7', name: 'Karabiber', amount: 1, unit: Unit.PINCH }
    ],
    instructions: [
      'Mercimekleri yıkayıp süzün.',
      'Soğan ve havucu küp küp doğrayın.',
      'Tereyağında soğanları kavurun.',
      'Havuç ve sarımsakları ekleyin.',
      'Mercimekleri ekleyip 2-3 dakika kavurun.',
      '6 su bardağı su ekleyin.',
      'Kaynayınca altını kısın ve 25-30 dakika pişirin.',
      'Blenderdan geçirin.',
      'Tuz ve karabiber ekleyip 5 dakika daha pişirin.'
    ],
    category: RecipeCategory.SOUP,
    difficulty: Difficulty.EASY,
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    tags: ['çorba', 'mercimek', 'vejetaryen', 'geleneksel'],
    isFavorite: true,
    rating: 5,
    notes: 'Üzerine kızdırılmış tereyağı ve nane ekleyebilirsiniz.',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Tavuk Sote',
    description: 'Sebzelerle harmanlanmış, baharatlı tavuk sote tarifi.',
    ingredients: [
      { id: '2-1', name: 'Tavuk Göğsü', amount: 500, unit: Unit.GRAM },
      { id: '2-2', name: 'Soğan', amount: 2, unit: Unit.PIECE },
      { id: '2-3', name: 'Biber', amount: 3, unit: Unit.PIECE },
      { id: '2-4', name: 'Domates', amount: 2, unit: Unit.PIECE },
      { id: '2-5', name: 'Sarımsak', amount: 4, unit: Unit.PIECE },
      { id: '2-6', name: 'Zeytinyağı', amount: 3, unit: Unit.TABLESPOON },
      { id: '2-7', name: 'Tuz', amount: 1, unit: Unit.TEASPOON },
      { id: '2-8', name: 'Karabiber', amount: 1, unit: Unit.TEASPOON },
      { id: '2-9', name: 'Kekik', amount: 1, unit: Unit.TEASPOON }
    ],
    instructions: [
      'Tavukları kuşbaşı doğrayın.',
      'Sebzeleri julyen doğrayın.',
      'Zeytinyağında tavukları kavurun.',
      'Sebzeleri ekleyin.',
      'Baharatları ekleyin.',
      'Orta ateşte 15-20 dakika pişirin.',
      'Tavuklar pişince altını kapatın.'
    ],
    category: RecipeCategory.MAIN_DISH,
    difficulty: Difficulty.MEDIUM,
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    tags: ['tavuk', 'ana yemek', 'sote', 'sebzeli'],
    isFavorite: false,
    rating: 4,
    notes: 'Pilav ile servis yapabilirsiniz.',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    title: 'Çoban Salata',
    description: 'Taze sebzelerle hazırlanan, zeytinyağlı geleneksel salata.',
    ingredients: [
      { id: '3-1', name: 'Domates', amount: 4, unit: Unit.PIECE },
      { id: '3-2', name: 'Salatalık', amount: 2, unit: Unit.PIECE },
      { id: '3-3', name: 'Soğan', amount: 1, unit: Unit.PIECE },
      { id: '3-4', name: 'Biber', amount: 2, unit: Unit.PIECE },
      { id: '3-5', name: 'Zeytin', amount: 15, unit: Unit.PIECE },
      { id: '3-6', name: 'Peynir', amount: 100, unit: Unit.GRAM },
      { id: '3-7', name: 'Zeytinyağı', amount: 3, unit: Unit.TABLESPOON },
      { id: '3-8', name: 'Limon Suyu', amount: 1, unit: Unit.TABLESPOON },
      { id: '3-9', name: 'Tuz', amount: 1, unit: Unit.TEASPOON }
    ],
    instructions: [
      'Tüm sebzeleri küp küp doğrayın.',
      'Geniş bir kaba alın.',
      'Zeytinleri ekleyin.',
      'Peyniri küp küp doğrayıp ekleyin.',
      'Zeytinyağı, limon suyu ve tuz ekleyin.',
      'Hafifçe karıştırın.',
      'Servis yapın.'
    ],
    category: RecipeCategory.SALAD,
    difficulty: Difficulty.EASY,
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    tags: ['salata', 'vejetaryen', 'çoban', 'taze'],
    isFavorite: true,
    rating: 5,
    notes: 'Üzerine maydanoz ekleyebilirsiniz.',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '4',
    title: 'Sütlaç',
    description: 'Geleneksel Türk tatlısı, fırında pişirilmiş sütlaç.',
    ingredients: [
      { id: '4-1', name: 'Süt', amount: 1, unit: Unit.LITER },
      { id: '4-2', name: 'Pirinç', amount: 100, unit: Unit.GRAM },
      { id: '4-3', name: 'Şeker', amount: 150, unit: Unit.GRAM },
      { id: '4-4', name: 'Vanilya', amount: 1, unit: Unit.TEASPOON },
      { id: '4-5', name: 'Tuz', amount: 1, unit: Unit.PINCH }
    ],
    instructions: [
      'Pirinçleri yıkayıp süzün.',
      'Sütü kaynatın.',
      'Pirinçleri ekleyin ve yumuşayana kadar pişirin.',
      'Şeker ekleyin.',
      'Vanilya ve tuz ekleyin.',
      'Fırın kaplarına paylaştırın.',
      '180°C fırında 20-25 dakika pişirin.',
      'Üzeri kızarınca çıkarın.'
    ],
    category: RecipeCategory.DESSERT,
    difficulty: Difficulty.MEDIUM,
    prepTime: 10,
    cookTime: 45,
    servings: 6,
    tags: ['tatlı', 'sütlaç', 'geleneksel', 'fırın'],
    isFavorite: false,
    rating: 4,
    notes: 'Soğuduktan sonra buzdolabında bekletip soğuk servis yapın.',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: '5',
    title: 'Menemen',
    description: 'Kahvaltıların vazgeçilmezi, domates ve biberle hazırlanan yumurta yemeği.',
    ingredients: [
      { id: '5-1', name: 'Yumurta', amount: 4, unit: Unit.PIECE },
      { id: '5-2', name: 'Domates', amount: 3, unit: Unit.PIECE },
      { id: '5-3', name: 'Biber', amount: 2, unit: Unit.PIECE },
      { id: '5-4', name: 'Soğan', amount: 1, unit: Unit.PIECE },
      { id: '5-5', name: 'Zeytinyağı', amount: 2, unit: Unit.TABLESPOON },
      { id: '5-6', name: 'Tuz', amount: 1, unit: Unit.TEASPOON },
      { id: '5-7', name: 'Karabiber', amount: 1, unit: Unit.PINCH }
    ],
    instructions: [
      'Sebzeleri küp küp doğrayın.',
      'Zeytinyağında soğanları kavurun.',
      'Biberleri ekleyin.',
      'Domatesleri ekleyin.',
      'Sebzeler yumuşayınca yumurtaları kırın.',
      'Tuz ve karabiber ekleyin.',
      'Yumurtalar pişene kadar karıştırın.'
    ],
    category: RecipeCategory.BREAKFAST,
    difficulty: Difficulty.EASY,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    tags: ['kahvaltı', 'yumurta', 'menemen', 'geleneksel'],
    isFavorite: true,
    rating: 5,
    notes: 'Ekmek ile servis yapabilirsiniz.',
    createdAt: new Date('2024-01-30'),
    updatedAt: new Date('2024-01-30')
  }
]; 