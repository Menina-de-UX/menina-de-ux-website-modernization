export interface Estud {
  src: string
  title: string
  description: string
  active?: boolean
}
export const estud: Estud[] = [
  {
    src: '/estude/image-3.png',
    title: 'Card Sorting',
    description:
      'Conheça mais sobre essa ferramenta bastante utilizada durante para trabalhar a arquitetura de informação de um site ou aplicativo!',
    active: true,
  },
  {
    src: '/estude/image-4.png',
    title: 'Proposta de Valor',
    description:
      'O que é, como fazer e como ela pode mudar o seu negócio. Hoje, no Menina de UX repórter!',
    active: true,
  },
  {
    src: '/estude/image-1.png',
    title: 'Currículo de Milhões',
    description:
      'Aprenda a criar o currículo campeão e descubra coisas super importantes que você não sabia antes!',
    active: false,
  },
  {
    src: '/estude/image-2.png',
    title: 'O poder do LinkedIn',
    description:
      'Tudo sobre a maior rede profissional e as melhores dicas para deixar o seu perfil atrativo para recrutadores!',
    active: false,
  },
]
