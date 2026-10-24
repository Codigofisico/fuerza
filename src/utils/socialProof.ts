/**
 * Social proof notifications data and rotation logic
 */

export interface PurchaseNotification {
  id: number;
  name: string;
  location: string;
  product: string;
  timeAgo: string;
}

export const RECENT_PURCHASES: PurchaseNotification[] = [
  {
    id: 1,
    name: 'María',
    location: 'Ciudad de México, México',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 3 minutos',
  },
  {
    id: 2,
    name: 'Juan',
    location: 'Bogotá, Colombia',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 7 minutos',
  },
  {
    id: 3,
    name: 'Carlos',
    location: 'Madrid, España',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 11 minutos',
  },
  {
    id: 4,
    name: 'Valentina',
    location: 'Santiago, Chile',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 14 minutos',
  },
  {
    id: 5,
    name: 'Andrés',
    location: 'Buenos Aires, Argentina',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 18 minutos',
  },
  {
    id: 6,
    name: 'Sofía',
    location: 'Lima, Perú',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 22 minutos',
  },
  {
    id: 7,
    name: 'Mateo',
    location: 'Medellín, Colombia',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 26 minutos',
  },
  {
    id: 8,
    name: 'Diego',
    location: 'Guadalajara, México',
    product: 'Código Fuerza 28 + 4 Bonos',
    timeAgo: 'hace 31 minutos',
  },
];

export function getNextNotificationIndex(
  currentIndex: number,
  totalItems: number = RECENT_PURCHASES.length
): number {
  if (totalItems <= 0) return 0;
  return (currentIndex + 1) % totalItems;
}
