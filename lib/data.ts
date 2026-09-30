export const PHONE_HREF = 'tel:3049083009';
export const PHONE_DISPLAY = '(304) 908-3009';
export const LOGO_SRC =
  'https://static.wixstatic.com/media/66ee84_59b7db2025a04162afbaf8f8a8c3b082~mv2.png/v1/fill/w_398,h_190,al_c,q_90/logo.png';
export const GOOGLE_REVIEWS_URL = 'https://share.google/DVdRWjX6EyvydOOcN';

export function wix(id: string, ext: string, w: number, h: number): string {
  return `https://static.wixstatic.com/media/66ee84_${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_85/i.${ext}`;
}

export interface City {
  name: string;
  slug: string;
  county: string;
  img: string;
  big: string;
}

const CITY_ROWS: ReadonlyArray<[string, string, string, string]> = [
  ['Charleston', 'Kanawha', '266aba0c3a7d497496a1eacdcf267e8a', 'webp'],
  ['South Charleston', 'Kanawha', 'fd725cbfe1264f5580b3d8d790dd1b34', 'jpg'],
  ['St. Albans', 'Kanawha', 'a38f24286a8d4063af78f86943133931', 'jpg'],
  ['Cross Lanes', 'Kanawha', '0d61ed45bef84092b781423742ebecf5', 'jpg'],
  ['Nitro', 'Kanawha', '5d5042674b3a4a849644eaf8e4a77fa9', 'png'],
  ['Dunbar', 'Kanawha', '2df476dda736432e81ba024428905c2e', 'jpg'],
  ['Teays Valley & Scott Depot', 'Putnam', '18f4f618bc434b16a4557582567241db', 'jpg'],
  ['Winfield', 'Putnam', '8f3f2aeaebe34417b783cae8f81dfe5d', 'webp'],
  ['Buffalo', 'Putnam', 'd59732db97f7459d93af38ea9299aaa0', 'jpg'],
  ['Huntington', 'Cabell', '7f88a8d222ea4595aec5f97a669f589f', 'jpg'],
  ['Barboursville', 'Cabell', '7f3b4d6c49fb4be1bf158278ae1cb8fa', 'jpg'],
  ['Milton', 'Cabell', '80cf39b20cda45d4a3160de70dfe8efb', 'jpg'],
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const CITIES: ReadonlyArray<City> = CITY_ROWS.map(([name, county, id, ext]) => ({
  name,
  slug: slugify(name),
  county,
  img: wix(id, ext, 240, 240),
  big: wix(id, ext, 1200, 900),
}));

export interface Service {
  title: string;
  img: string;
  body: string;
  price?: string;
}

export const INTERIOR: ReadonlyArray<Service> = [
  { title: 'Rylynn Shower Systems', price: 'From around $6,000', img: wix('16d864e56bc642daba88a3d359d343da', 'jpg', 1000, 800), body: 'Indulge in the ultimate shower experience with Rylynn Shower Systems. Our shower systems come in a vast range of colors, so you can customize your shower to match your style. From the initial design concept to the final installation, our professionals will work with you every step of the way. Our prices start at around $6,000, ensuring that you get top-quality shower systems at an affordable price.' },
  { title: 'Bathroom Remodels', price: 'From around $11,000', img: wix('5003d015f44a4b66b339c6b04e7ea422', 'png', 1000, 800), body: 'Our Bathroom Remodels offer a complete overhaul of your existing bathroom, transforming it into a relaxing and elegant space that you deserve. Starting at around $11,000, our design process allows you to customize your bathroom to fit your specific lifestyle and needs. We take pride in our workmanship and timely delivery, so you can enjoy your new bathroom as soon as possible.' },
  { title: 'Kitchens & Countertops', price: 'From $16,000', img: wix('6e62463437704927810c58b1b7e39c2c', 'jpg', 1000, 800), body: "Looking for a new kitchen that won't break the bank? Our economy remodels start at just $16,000, while our mid range and high end options offer more customization starting at $20,000 and $30,000 respectively. No matter what your budget is, we offer high quality cabinets and countertops for your dream kitchen." },
  { title: 'Flooring & Tile', price: 'From $9 / sq ft installed', img: wix('1a9f94194b274452bbc80289f68bb578', 'jpg', 1000, 800), body: 'Upgrade your home with our stunning flooring and tile options. Our wide selection includes LVT and tile from top brands like Mannington, Everlife, Daltile, and MSI. With prices starting at only $9 per square foot installed, you can transform any room in your home with ease. Our expert team is dedicated to providing you with the best service and quality products to ensure that your project is a success from start to finish.' },
  { title: 'Stairs & Carpentry', img: wix('9bce58ce2c224ae5bc687cecd51819cd', 'jpg', 1000, 800), body: "Whether you're looking to upgrade your existing stairs or create a grand entrance, our Stairs and Trim Carpentry services have got you covered. Our skilled carpenters use only the finest materials to create stunning and unique designs that match your preferences. We'll work closely with you to ensure that the final product is everything you've dreamed of and more. Transform your home with our exceptional services today!" },
];

export const EXTERIOR: ReadonlyArray<Service> = [
  { title: 'Decks', img: wix('efcb7e37029544ff918b987970972955', 'jpeg', 1000, 800), body: "Decks are what we're known for. As an official Fiberon partner, we build low-maintenance composite decks in every style — multi-level rebuilds, covered decks wrapped in cedar, pool decks, and screened outdoor rooms that add a whole season to your year. Every deck is built to code by our own crews, with railing, lighting, and stair options you can see at the showroom first." },
  { title: 'Outdoor Living Spaces', img: wix('09da357d98524b0ea22f1a7e0da6b6bf', 'jpg', 1000, 800), body: 'Some of our favorite projects turn a plain backyard into the best room of the house — covered decks with ceiling fans, screened porches, poured patios, and porch posts wrapped in cedar. If you can picture yourself out there, we can build it.' },
  { title: 'Roofing and Storm Damage', img: wix('878ecb3275b748398befe6c3487338f9', 'jpeg', 1000, 800), body: 'When weather wins a round, we make it right — roofing, siding, and gutter restoration handled by a licensed general contractor who can coordinate with your insurance and rebuild the whole exterior, not just patch the visible damage.' },
  { title: 'Windows, Siding & Gutters', img: wix('10650f5bb6694120959dac7c1f16453c', 'jpeg', 1000, 800), body: 'The whole exterior envelope, handled by one licensed contractor. We install vinyl and board-and-batten siding in a full range of colors — including complete transformations with color-matched trim, stone accents, soffit and fascia — plus replacement windows that seal out drafts and seamless gutters that protect your foundation. And when storms roll through the valley, we handle damage restoration, including insurance-involved siding and gutter work. One crew, one project manager, everything coordinated.' },
];

export type GalleryCategory = 'Interior' | 'Exterior';

export interface GalleryItem {
  title: string;
  img: string;
  cat: GalleryCategory;
}

export const GALLERY: ReadonlyArray<GalleryItem> = [
  ...INTERIOR.map((s): GalleryItem => ({ title: s.title, img: s.img, cat: 'Interior' })),
  { title: 'Bathroom Transformation', img: wix('5ff8d758ec12461e8fe6a50e519cda84', 'png', 800, 800), cat: 'Interior' },
  ...EXTERIOR.map((s): GalleryItem => ({ title: s.title, img: s.img, cat: 'Exterior' })),
  { title: 'Covered Deck', img: wix('cdb1383ec3964cae96c31665fda9cb0b', 'jpeg', 800, 800), cat: 'Exterior' },
];

export interface Review {
  name: string;
  meta: string;
  url: string;
  avatar?: string;
  photos: ReadonlyArray<string>;
  text: string;
}

export const REVIEWS: ReadonlyArray<Review> = [
  { name: 'Traci Dalton', meta: 'Bathroom remodel · 7 months ago', url: 'https://share.google/xuTrcryBpAm8c59tv', avatar: '/assets/review-traci.png', photos: ['/assets/review-traci-bath.png'], text: "We are extremely satisfied with Rylynn. From the first interaction to job completion the team was helpful, professional, responsive, dependable, knowledgeable, transparent, and trustworthy. They made the process easy! Big projects usually create anxiety but working with them removed any anxiety and just made it exciting. We LOVE our remodeled bathroom and have no regrets for choosing Rylynn!" },
  { name: 'Charlotte Lakies', meta: 'Deck project · 11 months ago', url: 'https://share.google/HkC8I8lWG7cnGW4iq', avatar: '/assets/review-charlotte.png', photos: ['/assets/review-charlotte-deck.png'], text: "Rylynn completed a deck project for me and I can't say enough wonderful things about the entire crew. Devon and Golden went above and beyond, working long hard days. Their attention to detail and skilled craftsmanship exceeded all of my expectations. The deck looks amazing and I hope to work with them again on future projects." },
  { name: 'Jonathon Buerck', meta: 'Kitchen & master bath · a year ago', url: 'https://share.google/Wa2LKsxqNlq41AcDO', photos: ['/assets/review-j-1.png', '/assets/review-j-2.png', '/assets/review-j-3.png', '/assets/review-j-4.png', '/assets/review-j-5.png'], text: "Highly recommend! We had our kitchen and master bath remodeled recently by Rylynn and their work and professionalism is top notch! Everything from their communication to the quality of the material was exceptional. But, the best part of the experience is the team assigned to the job. We had the same guys for the entirety of the projects. Jesse and Jay did the kitchen. Jesse was skilled, man! He could do anything. And Jay always took the time to talk to us throughout the project to ensure we were satisfied along the way. Two of the nicest guys you'll ever meet and so skilled! Lee and Dante were tasked with the bathroom. Those guys could tile! The only negative I can say was the time it took to complete the projects was longer than estimated, but it was certainly worth the wait. These guys really care about doing everything right with the highest quality craftsmanship. If you're looking for a local and professional outfit to do some remodeling, look no further than Rylynn." },
];

export const JOBS: ReadonlyArray<string> = ['Tile Specialist', 'General Laborer', 'Gutter Installer', 'Team Leaders'];
