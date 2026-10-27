/**
 * PREFEITURAS ATENDIDAS
 * Mesmas prefeituras exibidas no site atual. Os logos ficam em public/images/prefeituras.
 * Recomendação: substituir por versões em alta resolução (os atuais têm 180 px).
 */
import { Prefeitura } from '../core/models/content.models';

export const PREFEITURAS: Prefeitura[] = [
  {
    slug: 'goiania',
    name: 'Goiânia',
    uf: 'GO',
    logo: 'images/prefeituras/goiania.png',
    logoWidth: 57,
    logoHeight: 69,
  },
  {
    slug: 'senador-canedo',
    name: 'Senador Canedo',
    uf: 'GO',
    logo: 'images/prefeituras/senador-canedo.png',
    logoWidth: 100,
    logoHeight: 28,
  },
  {
    slug: 'hidrolandia',
    name: 'Hidrolândia',
    uf: 'GO',
    logo: 'images/prefeituras/hidrolandia.png',
    logoWidth: 86,
    logoHeight: 28,
  },
  {
    slug: 'aruana',
    name: 'Aruanã',
    uf: 'GO',
    logo: 'images/prefeituras/aruana.png',
    logoWidth: 65,
    logoHeight: 59,
  },
  {
    slug: 'torixoreu',
    name: 'Torixoréu',
    uf: 'MT',
    logo: 'images/prefeituras/torixoreu.png',
    logoWidth: 83,
    logoHeight: 24,
  },
];

export const STATE_NAMES: Record<Prefeitura['uf'], string> = {
  GO: 'Goiás',
  MT: 'Mato Grosso',
};
