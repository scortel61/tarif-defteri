# Tarif Defteri Web Uygulaması - PRD (Product Requirements Document)

## 1. Proje Özeti ve Hedefler

### 1.1 Proje Tanımı
Tarif Defteri, kullanıcıların kişisel yemek tariflerini dijital ortamda saklayabilecekleri, organize edebilecekleri ve paylaşabilecekleri modern bir web uygulamasıdır.

### 1.2 Ana Hedefler
- **Kullanıcı Deneyimi**: Sezgisel ve kullanımı kolay arayüz ile tarif yönetimi
- **Erişilebilirlik**: Mobil cihazlarda optimize edilmiş responsive tasarım
- **Performans**: Hızlı yükleme süreleri ve akıcı kullanıcı deneyimi
- **Maliyet Etkinliği**: GitHub Pages ile ücretsiz hosting
- **Veri Güvenliği**: LocalStorage ile yerel veri saklama

### 1.3 Hedef Kitle
- Ev yemekleri yapan kişiler
- Yemek tariflerini organize etmek isteyen kullanıcılar
- Mobil cihazlarda tarif arayan kullanıcılar
- Tarif koleksiyonu oluşturmak isteyen yemek severler

## 2. Teknik Stack ve Architecture

### 2.1 Frontend Stack
- **Framework**: React 18+ (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useReducer
- **Routing**: React Router DOM
- **Icons**: Lucide React / Heroicons

### 2.2 Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Testing**: Vitest + React Testing Library
- **Git Hooks**: Husky + lint-staged

### 2.3 Deployment & Hosting
- **Platform**: GitHub Pages
- **Build Process**: GitHub Actions (CI/CD)
- **Domain**: Custom domain support (opsiyonel)

### 2.4 Data Architecture
- **Storage**: LocalStorage (primary), IndexedDB (future)
- **Data Format**: JSON
- **Export/Import**: JSON, CSV, PDF
- **Backup**: Local file export

## 3. Core Features (MVP - Phase 1)

### 3.1 Tarif Yönetimi
- Tarif ekleme, düzenleme, silme
- Tarif kategorileri (ana yemek, tatlı, çorba, vb.)
- Malzeme listesi ve miktarları
- Hazırlama adımları
- Pişirme süresi ve zorluk seviyesi
- Fotoğraf ekleme (base64 encoding)

### 3.2 Arama ve Filtreleme
- Tarif adına göre arama
- Kategori bazlı filtreleme
- Malzeme bazlı arama
- Zorluk seviyesi filtreleme

### 3.3 Kullanıcı Arayüzü
- Responsive tasarım (mobile-first)
- Dark/Light mode toggle
- Kategori bazlı grid layout
- Tarif detay sayfası
- Hızlı tarif ekleme formu

### 3.4 Veri Yönetimi
- LocalStorage persistence
- Veri export/import
- Otomatik backup
- Veri doğrulama

## 4. Advanced Features (Phase 2)

### 4.1 Gelişmiş Özellikler
- Tarif favorileri ve rating sistemi
- Alışveriş listesi oluşturma
- Tarif planlama (haftalık menü)
- Besin değeri hesaplama
- Porsiyon hesaplayıcı

### 4.2 Sosyal Özellikler
- Tarif paylaşımı (link)
- Tarif yorumları (local)
- Topluluk tarifleri
- Tarif etiketleme sistemi

### 4.3 Gelişmiş Arama
- Full-text search
- Fuzzy search
- Gelişmiş filtreler
- Arama geçmişi

### 4.4 Offline Support
- Service Worker
- Offline tarif görüntüleme
- Sync when online

## 5. UI/UX Requirements

### 5.1 Design Principles
- **Minimalist**: Sade ve temiz arayüz
- **Intuitive**: Sezgisel navigasyon
- **Accessible**: WCAG 2.1 AA uyumluluğu
- **Consistent**: Tutarlı tasarım dili

### 5.2 Color Scheme
- **Primary**: Modern mavi tonları
- **Secondary**: Sıcak turuncu/kırmızı tonları
- **Neutral**: Gri tonları
- **Accent**: Yeşil tonları (başarı mesajları)

### 5.3 Typography
- **Headings**: Inter, Roboto
- **Body**: System fonts (fallback)
- **Hierarchy**: Clear visual hierarchy
- **Readability**: Optimal line height ve spacing

### 5.4 Component Library
- Button variants (primary, secondary, outline)
- Form components (input, select, textarea)
- Card components (tarif kartları)
- Modal ve drawer components
- Loading states ve skeleton screens

### 5.5 Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 6. Performance Targets

### 6.1 Loading Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 500KB (gzipped)

### 6.2 Runtime Performance
- Smooth scrolling (60fps)
- Instant search results
- Fast image loading
- Efficient state updates

### 6.3 Optimization Strategies
- Code splitting
- Lazy loading
- Image optimization
- Tree shaking
- Bundle analysis

## 7. Success Metrics

### 7.1 User Engagement
- Daily active users
- Session duration
- Tarif ekleme oranı
- Feature adoption rate

### 7.2 Performance Metrics
- Page load times
- Core Web Vitals
- Error rates
- Offline functionality

### 7.3 Technical Metrics
- Bundle size
- Lighthouse scores
- Accessibility score
- SEO performance

## 8. Risk Assessment

### 8.1 Technical Risks
- LocalStorage size limitations
- Browser compatibility issues
- Performance degradation with large datasets

### 8.2 Mitigation Strategies
- Data compression techniques
- Progressive enhancement
- Regular performance monitoring
- Fallback mechanisms

## 9. Timeline ve Milestones

### 9.1 Phase 1 (MVP) - 4-6 hafta
- Core functionality
- Basic UI/UX
- Testing ve bug fixes
- GitHub Pages deployment

### 9.2 Phase 2 (Enhancement) - 6-8 hafta
- Advanced features
- Performance optimization
- User feedback integration
- Documentation

## 10. Future Considerations

### 10.1 Scalability
- Cloud storage integration
- User authentication
- Multi-device sync
- API development

### 10.2 Monetization
- Premium features
- Advertisement integration
- Partnership opportunities
- Subscription model 