/**
 * CONFIGURAÇÃO DE AMBIENTE
 * `formEndpoints`: URLs que recebem os formulários (POST JSON / multipart).
 * Podem apontar para um formulário do WordPress (ex.: Contact Form 7 REST API),
 * um serviço como Formspree ou uma API própria.
 * Enquanto estiverem vazias, os envios são simulados (apenas registrados no console).
 */
export const environment = {
  siteUrl: 'https://indicemor.com.br',
  formEndpoints: {
    quote: '',
    contact: '',
    career: '',
  },
};
