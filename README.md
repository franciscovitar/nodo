# NODO Contable & Tributario - Landing Page

Una landing page premium y moderna para un estudio contable ficticio especializado en PYMEs, desarrollada con Next.js 15, SCSS y CSS Modules.

## 🚀 Características

- **Stack moderno**: Next.js 15 (App Router) + JavaScript + SCSS con CSS Modules
- **Diseño premium**: Estilo fintech moderno con glassy cards, gradientes y microanimaciones
- **100% Responsive**: Mobile-first design optimizado para todos los dispositivos
- **Accesible**: Cumple estándares WCAG con navegación por teclado y lectores de pantalla
- **SEO optimizado**: Metadata completa, Open Graph y estructura semántica
- **Animaciones suaves**: Reveal on scroll con respeto por `prefers-reduced-motion`
- **Sin librerías externas**: Solo Next.js y Sass, código limpio y mantenible

## 📋 Secciones

1. **Header** - Navegación sticky con menú móvil
2. **Hero** - Impacto visual con CTAs y social proof
3. **Cómo trabajamos** - 3 pasos del proceso
4. **Servicios** - 4 áreas de especialización
5. **Planes** - 3 opciones con pricing claro
6. **Resultados** - Métricas y logros
7. **Testimonios** - 5 casos reales ficticios
8. **FAQ** - Acordeón accesible con 6 preguntas
9. **Recursos** - Preview de blog posts
10. **Contacto** - Formulario + info de contacto
11. **Footer** - Enlaces y información legal

## 🛠 Instalación y Uso

### Requisitos

- Node.js 20.9.0 o superior
- npm, yarn, pnpm o bun

### Pasos

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:

   ```bash
   npm run dev
   ```

3. **Abrir en navegador**: [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
# Desarrollo
npm run dev

# Producción (requiere Node.js >=20.9.0)
npm run build
npm start

# Linting
npm run lint
```

## 🎨 Stack Técnico

### Frontend

- **Next.js 15** - Framework React con App Router
- **JavaScript (JSX)** - Sin TypeScript según especificaciones
- **SCSS + CSS Modules** - Estilos modulares y mantenibles
- **Google Fonts** - Tipografía Inter para textos elegantes

### Características técnicas

- **CSS Variables** - Para theming y consistencia
- **IntersectionObserver** - Animaciones reveal on scroll
- **Responsive Grid** - CSS Grid y Flexbox
- **Semantic HTML** - Estructura accesible
- **Modern CSS** - Clamp(), custom properties, backdrop-filter

## 🎯 Objetivos de UX/UI

### Visual

- Diseño fintech/consultora premium
- Paleta de colores profesional (azules + teal)
- Tipografía fluida con clamp()
- Microanimaciones sutiles
- Glass morphism en cards destacadas

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Estrategia Mobile-First

- Componentes pensados primero para móvil
- Progressive enhancement para desktop
- Touch-friendly interactions

## ♿ Accesibilidad

### Implementado

- Navegación por teclado completa
- Focus styles visibles
- Aria-labels y roles semánticos
- Contraste de colores WCAG AA
- Skip links para navegación rápida
- Respect por `prefers-reduced-motion`

## 💼 Contenido Empresarial

### Empresa ficticia: NODO Contable & Tributario

- **Tagline**: "Contabilidad simple para PYMEs que quieren crecer"
- **Target**: Comercios, gastronomía, servicios, constructoras, startups
- **Ubicación**: Córdoba, Argentina (atención nacional)

### Servicios

1. **Impuestos & AFIP** - Presentaciones, regularizaciones
2. **Sueldos & RRHH** - Liquidaciones, cargas sociales
3. **Gestión PYME** - Costos, reportes, proyecciones
4. **Startups & Digital** - E-commerce, automatización

### Planes

- **Base** - Monotributo ($45k+)
- **PYME** - Gestión mensual ($85k+) ⭐ Destacado
- **Full** - Integral con sueldos ($120k+)

## 🔧 Personalización

### Colores (en globals.scss)

```scss
:root {
  --color-primary: #1e40af; // Azul principal
  --color-secondary: #0d9488; // Teal/verde
  --color-gray-*: ; // Escala de grises
}
```

### Tipografía

- **Font family**: Inter (Google Fonts)
- **Sizes**: Sistema clamp() responsivo
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Deployment

### Vercel (recomendado)

1. Push a Git repository
2. Conectar con Vercel
3. Deploy automático

### Otros hosts

```bash
npm run build  # Requiere Node.js >=20.9.0
npm start
```

## 🛡️ Disclaimer

**Este es un proyecto conceptual/demo** con fines educativos y de demostración de habilidades técnicas.

- La empresa "NODO Contable & Tributario" es ficticia
- Los testimonios y datos son ejemplos creados para la demo
- El formulario de contacto es solo UI (no envía datos reales)
- Los precios y servicios son referenciales

---

**Desarrollado con ❤️ usando Next.js y SCSS**
