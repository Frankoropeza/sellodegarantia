// config.ts — Single source of truth for Sello de Garantía

export const SITE_NAME = 'Sello de Garantía';
export const SITE_URL = 'https://sellodegarantia.com';
export const LEGAL_NAME = 'Tumipack México SA de CV';
export const SITE_DESCRIPTION = 'Fabricantes de película de PVC termoencogible para sellos de garantía, mangas retráctiles, etiquetas impresas y preformas. 28 años de experiencia. Cobertura nacional.';

export const PHONE = '55 5686 3599';
export const PHONE_HREF = 'tel:+525556863599';
export const WHATSAPP = '5215556863599';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP}?text=Hola%2C%20quiero%20cotizar%20sellos%20de%20garant%C3%ADa`;
export const EMAIL = 'ventas@sellodegarantia.com';

export const HOURS = {
  display: 'Lun-Vie 9:00-18:00 · Sáb 9:00-14:00',
  structured: [
    { days: 'Mo-Fr', open: '09:00', close: '18:00' },
    { days: 'Sa', open: '09:00', close: '14:00' },
  ],
};

export const LOCATION = {
  street: '2ª Cerrada del Tercer Anillo de Circunvalación No. 12',
  neighborhood: 'Barrio Santa Bárbara',
  borough: 'Iztapalapa',
  city: 'Ciudad de México',
  state: 'CDMX',
  zip: '09000',
  country: 'MX',
  full: '2ª Cerrada del Tercer Anillo de Circunvalación No. 12, Barrio Santa Bárbara, Iztapalapa, CDMX 09000',
};

export const GEO = {
  lat: 19.3573,
  lng: -99.0875,
};

export const BRAND = {
  primary: '#0047AB',
  secondary: '#1A1A2E',
  accent: '#FF6B00',
  white: '#FFFFFF',
  gray50: '#F8FAFC',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray600: '#475569',
  gray900: '#0F172A',
  dark: '#18181B',
};

export const EXPERIENCE_YEARS = 28;
export const EMPLOYEES = '6-10';

export const CATEGORIES = [
  {
    title: 'Sellos de Garantía',
    slug: 'sellos-de-garantia',
    subtitle: 'Bandas de PVC termoencogible para inviolabilidad de envases',
    subcategories: [
      { name: 'Sello liso transparente', href: '/productos/sellos-de-garantia/' },
      { name: 'Sello liso de color', href: '/productos/sellos-de-garantia/' },
      { name: 'Sello impreso a 6 tintas', href: '/productos/sellos-de-garantia/' },
      { name: 'Sello con perforación', href: '/productos/sellos-de-garantia/' },
      { name: 'Sello para garrafón 20L', href: '/productos/sellos-de-garantia/' },
      { name: 'Sello farmacéutico', href: '/productos/sellos-de-garantia/' },
    ],
  },
  {
    title: 'Mangas Retráctiles',
    slug: 'mangas-retractiles',
    subtitle: 'Mangas de PVC full-body para etiquetado envolvente 360°',
    subcategories: [
      { name: 'Manga cuerpo completo lisa', href: '/productos/mangas-retractiles/' },
      { name: 'Manga cuerpo completo impresa', href: '/productos/mangas-retractiles/' },
      { name: 'Manga parcial (media botella)', href: '/productos/mangas-retractiles/' },
      { name: 'Manga para latas y envases metálicos', href: '/productos/mangas-retractiles/' },
      { name: 'Manga multipak (agrupación)', href: '/productos/mangas-retractiles/' },
      { name: 'Manga con perforación de apertura', href: '/productos/mangas-retractiles/' },
    ],
  },
  {
    title: 'Etiquetas Impresas',
    slug: 'etiquetas-impresas',
    subtitle: 'Etiquetas de PVC con impresión hasta 6 colores en rotograbado',
    subcategories: [
      { name: 'Etiqueta retráctil cuerpo completo', href: '/productos/etiquetas-impresas/' },
      { name: 'Etiqueta retráctil parcial', href: '/productos/etiquetas-impresas/' },
      { name: 'Etiqueta con datos legales y código de barras', href: '/productos/etiquetas-impresas/' },
      { name: 'Etiqueta promocional (edición limitada)', href: '/productos/etiquetas-impresas/' },
      { name: 'Etiqueta de seguridad con holograma', href: '/productos/etiquetas-impresas/' },
      { name: 'Diseño personalizado (servicio de diseño)', href: '/productos/etiquetas-impresas/' },
    ],
  },
  {
    title: 'Preformas y Cápsulas',
    slug: 'preformas-y-capsulas',
    subtitle: 'Preformas termoencogibles para botellas de vino, licor y salsas',
    subcategories: [
      { name: 'Cápsula para botella de vino', href: '/productos/preformas-y-capsulas/' },
      { name: 'Cápsula para botella de licor', href: '/productos/preformas-y-capsulas/' },
      { name: 'Cápsula para mezcal y destilados', href: '/productos/preformas-y-capsulas/' },
      { name: 'Preforma para salsas y aderezos', href: '/productos/preformas-y-capsulas/' },
      { name: 'Preforma para aceites y vinagres', href: '/productos/preformas-y-capsulas/' },
      { name: 'Preforma con impresión personalizada', href: '/productos/preformas-y-capsulas/' },
    ],
  },
  {
    title: 'Película en Rollo',
    slug: 'pelicula-en-rollo',
    subtitle: 'Rollos de PVC termoencogible para líneas de producción automatizadas',
    subcategories: [
      { name: 'Rollo calibre 40 micras', href: '/productos/pelicula-en-rollo/' },
      { name: 'Rollo calibre 50 micras', href: '/productos/pelicula-en-rollo/' },
      { name: 'Rollo calibre 60 micras', href: '/productos/pelicula-en-rollo/' },
      { name: 'Rollo calibre 80 micras', href: '/productos/pelicula-en-rollo/' },
      { name: 'Bobina impresa para máquina automática', href: '/productos/pelicula-en-rollo/' },
      { name: 'Bobina a medida (ancho y diámetro)', href: '/productos/pelicula-en-rollo/' },
    ],
  },
  {
    title: 'Maquinaria de Aplicación',
    slug: 'maquinaria-de-aplicacion',
    subtitle: 'Túneles de calor y aplicadoras para líneas de empaque industrial',
    subcategories: [
      { name: 'Túnel de calor por vapor', href: '/productos/maquinaria-de-aplicacion/' },
      { name: 'Túnel de calor por aire caliente', href: '/productos/maquinaria-de-aplicacion/' },
      { name: 'Aplicadora automática de mangas', href: '/productos/maquinaria-de-aplicacion/' },
      { name: 'Aplicadora semiautomática', href: '/productos/maquinaria-de-aplicacion/' },
      { name: 'Pistola de calor industrial', href: '/productos/maquinaria-de-aplicacion/' },
      { name: 'Refacciones y servicio técnico', href: '/productos/maquinaria-de-aplicacion/' },
    ],
  },
];

export const INDUSTRIES = [
  { name: 'Farmacéutica', href: '/industrias/farmaceutica/', image: '/img/industrias/farmaceutica.avif', description: 'Sellos de seguridad para medicamentos, suplementos y dispositivos médicos. Cumplimiento normativo COFEPRIS y trazabilidad garantizada.' },
  { name: 'Alimentos y Bebidas', href: '/industrias/alimentos-bebidas/', image: '/img/industrias/alimentos-bebidas.avif', description: 'Película grado alimenticio para salsas, miel, mermeladas, condimentos y conservas. Sellado que mantiene la frescura.' },
  { name: 'Agua y Embotellado', href: '/industrias/agua-embotellado/', image: '/img/industrias/agua-embotellado.avif', description: 'Sellos para garrafones de 20L, botellas PET y presentaciones de agua purificada. Resistencia al manejo y transporte.' },
  { name: 'Vinos y Licores', href: '/industrias/vinos-licores/', image: '/img/industrias/vinos-licores.avif', description: 'Cápsulas y sellos termoencogibles para botellas de vidrio. Acabado profesional para destilados, mezcales y vinos.' },
  { name: 'Productos Naturales', href: '/industrias/productos-naturales/', image: '/img/industrias/productos-naturales.avif', description: 'Sellos para suplementos herbales, remedios naturistas y productos orgánicos. Garantía de inviolabilidad al consumidor.' },
  { name: 'Gas y Petroquímica', href: '/industrias/gas-petroquimica/', image: '/img/industrias/gas-petroquimica.avif', description: 'Sellos de alta resistencia para contenedores de gas LP, aditivos y productos químicos industriales.' },
  { name: 'Papelería', href: '/industrias/', image: '/img/industrias/papeleria.avif', description: 'Empaque termoencogible para sets de papelería, material escolar y artículos de oficina. Presentación limpia en anaquel.' },
  { name: 'Juguetes', href: '/industrias/', image: '/img/industrias/juguetes.avif', description: 'Sellado de seguridad para juguetes y artículos infantiles. Empaque que protege el producto y cumple normativa de seguridad.' },
];

export const NAV_LINKS = [
  { text: 'Inicio', href: '/' },
  {
    text: 'Productos',
    href: '/productos/',
    children: CATEGORIES.map((c) => ({ text: c.title, href: `/productos/${c.slug}/` })),
  },
  {
    text: 'Industrias',
    href: '/industrias/',
    children: INDUSTRIES.slice(0, 6).map((i) => ({ text: i.name, href: i.href })),
  },
  { text: 'Nosotros', href: '/nosotros/' },
  { text: 'Contacto', href: '/contacto/' },
];

export const SOCIAL = {
  facebook: '',
  instagram: '',
};
