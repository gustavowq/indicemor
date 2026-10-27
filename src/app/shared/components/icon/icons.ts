/**
 * BIBLIOTECA DE ÍCONES
 * Traçados dos ícones Lucide (https://lucide.dev, licença ISC) usados no site.
 * Cada ícone é uma lista de elementos SVG desenhados pelo componente <app-icon>.
 * Para adicionar um ícone: copie os elementos do SVG do Lucide para cá.
 */
export type IconElement =
  | { tag: 'path'; d: string }
  | { tag: 'circle'; cx: number; cy: number; r: number }
  | { tag: 'rect'; x: number; y: number; width: number; height: number; rx?: number }
  | { tag: 'line'; x1: number; y1: number; x2: number; y2: number }
  | { tag: 'polygon'; points: string; filled?: boolean }
  | { tag: 'ellipse'; cx: number; cy: number; rx: number; ry: number };

export const ICONS = {
  'arrow-right': [
    { tag: 'path', d: 'M5 12h14' },
    { tag: 'path', d: 'm12 5 7 7-7 7' },
  ],
  check: [{ tag: 'path', d: 'M20 6 9 17l-5-5' }],
  phone: [
    {
      tag: 'path',
      d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    },
  ],
  mail: [
    { tag: 'rect', x: 2, y: 4, width: 20, height: 16, rx: 2 },
    { tag: 'path', d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' },
  ],
  'map-pin': [
    { tag: 'path', d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' },
    { tag: 'circle', cx: 12, cy: 10, r: 3 },
  ],
  clock: [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'M12 6v6l4 2' },
  ],
  'trending-up': [
    { tag: 'path', d: 'm22 7-8.5 8.5-5-5L2 17' },
    { tag: 'path', d: 'M16 7h6v6' },
  ],
  'shield-check': [
    {
      tag: 'path',
      d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
    },
    { tag: 'path', d: 'm9 12 2 2 4-4' },
  ],
  search: [
    { tag: 'circle', cx: 11, cy: 11, r: 8 },
    { tag: 'path', d: 'm21 21-4.3-4.3' },
  ],
  'file-text': [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'M10 9H8' },
    { tag: 'path', d: 'M16 13H8' },
    { tag: 'path', d: 'M16 17H8' },
  ],
  landmark: [
    { tag: 'path', d: 'M3 22h18' },
    { tag: 'path', d: 'M6 18v-7' },
    { tag: 'path', d: 'M10 18v-7' },
    { tag: 'path', d: 'M14 18v-7' },
    { tag: 'path', d: 'M18 18v-7' },
    { tag: 'path', d: 'M12 2 20 7H4z' },
  ],
  users: [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: 9, cy: 7, r: 4 },
    { tag: 'path', d: 'M22 21v-2a4 4 0 0 0-3-3.87' },
    { tag: 'path', d: 'M16 3.13a4 4 0 0 1 0 7.75' },
  ],
  sprout: [
    { tag: 'path', d: 'M7 20h10' },
    { tag: 'path', d: 'M10 20c5.5-2.5.8-6.4 3-10' },
    {
      tag: 'path',
      d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z',
    },
    {
      tag: 'path',
      d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z',
    },
  ],
  'bar-chart': [
    { tag: 'path', d: 'M3 3v18h18' },
    { tag: 'path', d: 'M18 17V9' },
    { tag: 'path', d: 'M13 17V5' },
    { tag: 'path', d: 'M8 17v-3' },
  ],
  target: [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'circle', cx: 12, cy: 12, r: 6 },
    { tag: 'circle', cx: 12, cy: 12, r: 2 },
  ],
  scale: [
    { tag: 'path', d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' },
    { tag: 'path', d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' },
    { tag: 'path', d: 'M7 21h10' },
    { tag: 'path', d: 'M12 3v18' },
    { tag: 'path', d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2' },
  ],
  eye: [
    { tag: 'path', d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' },
    { tag: 'circle', cx: 12, cy: 12, r: 3 },
  ],
  lightbulb: [
    {
      tag: 'path',
      d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
    },
    { tag: 'path', d: 'M9 18h6' },
    { tag: 'path', d: 'M10 22h4' },
  ],
  heart: [
    {
      tag: 'path',
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
    },
  ],
  upload: [
    { tag: 'path', d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' },
    { tag: 'path', d: 'm17 8-5-5-5 5' },
    { tag: 'path', d: 'M12 3v12' },
  ],
  play: [{ tag: 'polygon', points: '6 3 20 12 6 21 6 3', filled: true }],
  'chevron-down': [{ tag: 'path', d: 'm6 9 6 6 6-6' }],
  calendar: [
    { tag: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 },
    { tag: 'path', d: 'M16 2v4' },
    { tag: 'path', d: 'M8 2v4' },
    { tag: 'path', d: 'M3 10h18' },
  ],
  lock: [
    { tag: 'rect', x: 3, y: 11, width: 18, height: 11, rx: 2 },
    { tag: 'path', d: 'M7 11V7a5 5 0 0 1 10 0v4' },
  ],
  briefcase: [
    { tag: 'path', d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' },
    { tag: 'rect', x: 2, y: 6, width: 20, height: 14, rx: 2 },
  ],
  'message-circle': [{ tag: 'path', d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' }],
  instagram: [
    { tag: 'rect', x: 2, y: 2, width: 20, height: 20, rx: 5 },
    { tag: 'path', d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' },
    { tag: 'path', d: 'M17.5 6.5h.01' },
  ],
  linkedin: [
    {
      tag: 'path',
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
    },
    { tag: 'rect', x: 2, y: 9, width: 4, height: 12 },
    { tag: 'circle', cx: 4, cy: 4, r: 2 },
  ],
  send: [
    { tag: 'path', d: 'm22 2-7 20-4-9-9-4Z' },
    { tag: 'path', d: 'M22 2 11 13' },
  ],
  'alert-triangle': [
    { tag: 'path', d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' },
    { tag: 'path', d: 'M12 9v4' },
    { tag: 'path', d: 'M12 17h.01' },
  ],
  database: [
    { tag: 'ellipse', cx: 12, cy: 5, rx: 9, ry: 3 },
    { tag: 'path', d: 'M3 5V19A9 3 0 0 0 21 19V5' },
    { tag: 'path', d: 'M3 12A9 3 0 0 0 21 12' },
  ],
  'refresh-cw': [
    { tag: 'path', d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' },
    { tag: 'path', d: 'M21 3v5h-5' },
    { tag: 'path', d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' },
    { tag: 'path', d: 'M8 16H3v5' },
  ],
  home: [
    { tag: 'path', d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { tag: 'path', d: 'M9 22V12h6v10' },
  ],
  menu: [
    { tag: 'path', d: 'M4 6h16' },
    { tag: 'path', d: 'M4 12h16' },
    { tag: 'path', d: 'M4 18h16' },
  ],
  x: [
    { tag: 'path', d: 'M18 6 6 18' },
    { tag: 'path', d: 'm6 6 12 12' },
  ],
  'hard-hat': [
    { tag: 'path', d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5' },
    { tag: 'path', d: 'M14 6a6 6 0 0 1 6 6v3' },
    { tag: 'path', d: 'M4 15v-3a6 6 0 0 1 6-6' },
    { tag: 'rect', x: 2, y: 15, width: 20, height: 4, rx: 1 },
  ],
  fuel: [
    { tag: 'line', x1: 3, y1: 22, x2: 15, y2: 22 },
    { tag: 'line', x1: 4, y1: 9, x2: 14, y2: 9 },
    { tag: 'path', d: 'M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18' },
    {
      tag: 'path',
      d: 'M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5',
    },
  ],
  'clipboard-check': [
    { tag: 'rect', x: 8, y: 2, width: 8, height: 4, rx: 1 },
    { tag: 'path', d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' },
    { tag: 'path', d: 'm9 14 2 2 4-4' },
  ],
  'check-circle': [
    { tag: 'circle', cx: 12, cy: 12, r: 10 },
    { tag: 'path', d: 'm9 12 2 2 4-4' },
  ],
  'external-link': [
    { tag: 'path', d: 'M15 3h6v6' },
    { tag: 'path', d: 'M10 14 21 3' },
    { tag: 'path', d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' },
  ],
} satisfies Record<string, IconElement[]>;

export type IconName = keyof typeof ICONS;
