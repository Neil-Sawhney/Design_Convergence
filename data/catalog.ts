export type CatalogImage = {
  src: string;
  alt: string;
};

export type CatalogVariant = {
  id: string;
  label: string;
  price: string;
  buyUrl: string;
  images: CatalogImage[];
};

export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  price?: string;
  buyUrl?: string;
  images?: CatalogImage[];
  variants?: CatalogVariant[];
  features?: string[];
};

export type CatalogCategory = {
  id: string;
  title: string;
  description: string;
  route: string;
  products: CatalogProduct[];
};

const relio4ft0 = new URL('../assets/products/Relio/4 ft/0.webp', import.meta.url).href;
const relio4ft1 = new URL('../assets/products/Relio/4 ft/1.webp', import.meta.url).href;
const relio4ft2 = new URL('../assets/products/Relio/4 ft/2.webp', import.meta.url).href;
const relio4ft3 = new URL('../assets/products/Relio/4 ft/3.webp', import.meta.url).href;
const relio6ft0 = new URL('../assets/products/Relio/6 ft/0_6ft.webp', import.meta.url).href;
const relio6ft1 = new URL('../assets/products/Relio/6 ft/1_6ft.webp', import.meta.url).href;
const relio6ft3 = new URL('../assets/products/Relio/6 ft/3_6ft.webp', import.meta.url).href;
const appleMain = new URL('../assets/products/Apple II/main.webp', import.meta.url).href;
const owPintPhoto1 = new URL('../assets/products/OW_pint_plug/photo1_smooth.webp', import.meta.url).href;
const owPintPhoto2 = new URL('../assets/products/OW_pint_plug/photo2_smooth.webp', import.meta.url).href;

const relioProduct: CatalogProduct = {
  id: 'relio-cable-organizer',
  name: 'Relio Cable Organizer',
  description:
    'Compact cable management system with a reliable manual winding mechanism to organize and shorten cables.',
  price: 'From $6.98',
  variants: [
    {
      id: 'relio-4ft',
      label: '4 ft',
      price: '$6.98',
      buyUrl: 'https://buy.stripe.com/fZu3co1w02cH95jg2F8g005',
      images: [
        { src: relio4ft0, alt: 'Relio Cable Organizer 4 ft main view' },
        { src: relio4ft1, alt: 'Relio Cable Organizer 4 ft variant' },
        { src: relio4ft2, alt: 'Relio Cable Organizer 4 ft detail' },
        { src: relio4ft3, alt: 'Relio Cable Organizer 4 ft packaging' },
      ],
    },
    {
      id: 'relio-6ft',
      label: '6 ft',
      price: '$6.98',
      buyUrl: 'https://buy.stripe.com/9B6eV60rW04z3KZg2F8g004',
      images: [
        { src: relio6ft0, alt: 'Relio Cable Organizer 6 ft main view' },
        { src: relio6ft1, alt: 'Relio Cable Organizer 6 ft detail' },
        { src: relio6ft3, alt: 'Relio Cable Organizer 6 ft packaging' },
      ],
    },
  ],
  features: [
    'Versatile design with a reliable manual winding mechanism to organize and shorten cables.',
    'Travel-friendly, lightweight construction for on-the-go organization.',
    'Stackable construction for neat storage of multiple cables.',
    'Easy operation with smooth rotation for quick length adjustment.',
  ],
};

const owPintPlug: CatalogProduct = {
  id: 'ow-pint-plug',
  name:
    'Tethered Charging Port Plug for Onewheel Pint / Pint X, Tethered Silicone Protector, Dust and Debris Guard, Black',
  description:
    'Durable silicone plug compatible with Onewheel Pint / Pint X charging ports, keeping out dust and debris during rides.',
  price: '$11.73',
  buyUrl: 'https://buy.stripe.com/eVqeV64Ic18D3KZ2bP8g001',
  images: [
    { src: owPintPhoto1, alt: 'Onewheel Pint Plug detail view' },
    { src: owPintPhoto2, alt: 'Onewheel Pint Plug alternate view' },
  ],
  features: [
    'Protection against dust and debris during rides.',
    'Tethered design keeps the plug attached and easy to access.',
    'Simple three-step installation: loosen screws, insert tab, tighten.',
    'Durable silicone withstands harsh off-road riding conditions.',
    'Custom-molded for a snug seal and reliable protection.',
  ],
};

const appleLid: CatalogProduct = {
  id: 'apple-ii-lid',
  name: 'Transparent Apple II Computer Lid',
  description:
    'Two variants available: with badge or without badge. Choose the option that fits your build.',
  price: 'From $0.00',
  variants: [
    {
      id: 'apple-ii-with-badge',
      label: 'With badge',
      price: '$0.00',
      buyUrl: 'https://buy.stripe.com/eVq5kw1w018D4P38Ad8g003',
      images: [{ src: appleMain, alt: 'Transparent Apple II Computer Lid with badge' }],
    },
    {
      id: 'apple-ii-without-badge',
      label: 'Without badge',
      price: '$0.00',
      buyUrl: 'https://buy.stripe.com/14A3coeiM3gL6Xb6s58g002',
      images: [{ src: appleMain, alt: 'Transparent Apple II Computer Lid without badge' }],
    },
  ],
};

export const categories: CatalogCategory[] = [
  {
    id: 'apple-ii',
    title: 'Apple II Computer Lids',
    description: 'Transparent lids and accessories for Apple II builds.',
    route: '/categories/apple-ii',
    products: [appleLid],
  },
  {
    id: 'accessories',
    title: 'Ride and Cable Accessories',
    description: 'Functional accessories for cables and Onewheel gear.',
    route: '/categories/accessories',
    products: [relioProduct, owPintPlug],
  },
];
