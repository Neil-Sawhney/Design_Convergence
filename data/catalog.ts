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

const productAsset = (path: string) => `/products/${path}`;
const relio4ft0 = productAsset('Relio/4 ft/0.webp');
const relio4ft1 = productAsset('Relio/4 ft/1.webp');
const relio4ft2 = productAsset('Relio/4 ft/2.webp');
const relio4ft3 = productAsset('Relio/4 ft/3.webp');
const relio6ft0 = productAsset('Relio/6 ft/0_6ft.webp');
const relio6ft1 = productAsset('Relio/6 ft/1_6ft.webp');
const relio6ft2 = productAsset('Relio/6 ft/2_6ft.webp');
const relio6ft3 = productAsset('Relio/6 ft/3_6ft.webp');
const appleLidImage = productAsset('Apple II/lid.webp');
const appleLidWithBadgeImage = productAsset('Apple II/lid_with_badge.webp');
const appleLidWithBadgePlusImage = productAsset('Apple II/lid_with_badge_plus.webp');
const appleBadge = productAsset('AppleII Badge/appleII_badge.webp');
const appleBadgePlus = productAsset('Apple II+ Badge/appleII+_badge.webp');
const owPintMain = productAsset('OW_pint_plug/main.webp');
const owPintPhoto1 = productAsset('OW_pint_plug/photo1_smooth.webp');
const owPintPhoto2 = productAsset('OW_pint_plug/photo2_smooth.webp');

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
      price: '$8.98',
      buyUrl: 'https://buy.stripe.com/9B6eV60rW04z3KZg2F8g004',
      images: [
        { src: relio6ft0, alt: 'Relio Cable Organizer 6 ft main view' },
        { src: relio6ft1, alt: 'Relio Cable Organizer 6 ft detail' },
        { src: relio6ft2, alt: 'Relio Cable Organizer 6 ft alternate view' },
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
    { src: owPintMain, alt: 'Onewheel Pint Plug main view' },
    { src: owPintPhoto1, alt: 'Onewheel Pint Plug detail view' },
    { src: owPintPhoto2, alt: 'Onewheel Pint Plug alternate view' },
  ],
  features: [
    'Protection against dust and debris during rides.',
    'Tethered design keeps the plug attached and easy to access.',
    'Simple three-step installation: loosen screws, insert tab, tighten.',
    'Durable silicone withstands harsh off-road riding conditions.',
  ],
};

const appleLid: CatalogProduct = {
  id: 'apple-ii-lid',
  name: 'Transparent Apple II Computer Lid',
  description:
    'Choose a lid with Apple II badge, lid with Apple II+ badge, or lid only.',
  price: 'From $100.00',
  variants: [
    {
      id: 'apple-ii-with-badge',
      label: 'Lid and Apple II badge',
      price: '$110.00',
      buyUrl: 'https://buy.stripe.com/cNi5kwdeI6sXa9n8Ad8g006',
      images: [
        { src: appleLidWithBadgeImage, alt: 'Transparent Apple II Computer Lid with badge' },
      ],
    },
    {
      id: 'apple-ii-with-badge-plus',
      label: 'Lid and Apple II+ badge',
      price: '$110.00',
      buyUrl: 'https://buy.stripe.com/fZu3cob6A3gLdlzg2F8g007',
      images: [
        {
          src: appleLidWithBadgePlusImage,
          alt: 'Transparent Apple II Computer Lid with Apple II+ badge',
        },
      ],
    },
    {
      id: 'apple-ii-no-badge',
      label: 'Lid only',
      price: '$100.00',
      buyUrl: 'https://buy.stripe.com/cNi5kwdeI6sXa9n8Ad8g006',
      images: [{ src: appleLidImage, alt: 'Transparent Apple II Computer Lid without badge' }],
    },
  ],
};

const appleBadgeProduct: CatalogProduct = {
  id: 'apple-ii-badge',
  name: 'Apple II Badge',
  description: 'Standalone badge for Apple II builds, available in two versions.',
  price: 'From $10.00',
  variants: [
    {
      id: 'apple-ii-badge-standard',
      label: 'Badge',
      price: '$10.00',
      buyUrl: 'https://buy.stripe.com/eVq8wI5Mg8B5epD7w98g009',
      images: [{ src: appleBadge, alt: 'Apple II badge' }],
    },
    {
      id: 'apple-ii-badge-plus',
      label: 'Apple II+ badge',
      price: '$10.00',
      buyUrl: 'https://buy.stripe.com/dRm7sEa2w9F96Xb9Eh8g008',
      images: [{ src: appleBadgePlus, alt: 'Apple II+ badge version' }],
    },
  ],
};

export const categories: CatalogCategory[] = [
  {
    id: 'vintage-computer-accessories',
    title: 'Vintage Computer Accessories',
    description: 'Transparent lids and accessories for Apple II builds.',
    route: '/categories/vintage-computer-accessories',
    products: [appleLid, appleBadgeProduct],
  },
  {
    id: 'onewheel-accessories',
    title: 'Onewheel Accessories',
    description: 'Protective add-ons for your Onewheel ride.',
    route: '/categories/onewheel-accessories',
    products: [owPintPlug],
  },
  {
    id: 'home-accessories',
    title: 'Home Accessories',
    description: 'Cable organization and practical everyday add-ons.',
    route: '/categories/home-accessories',
    products: [relioProduct],
  },
];
