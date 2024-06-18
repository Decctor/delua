import { easeBackInOut } from "d3-ease";

export const MainProductCategories = [
  {
    category: "Alianças",
    mainImageUrl: "/products/alianca-prata.jpg",
    call: "Celebre seu compromisso com elegância.",
  },
  {
    category: "Anéis",
    mainImageUrl: "/products/anel-prata.jpg",
    call: "Elegância em cada detalhe, brilho em cada momento.",
  },
  {
    category: "Pulseiras",
    mainImageUrl: "/products/pulseira-prata.png",
    call: "Estilo e graça em cada movimento.",
  },
  {
    category: "Berlocks",
    mainImageUrl: "/products/berlock-prata.jpg",
    call: "Pequenos detalhes, grandes significados.",
  },
  {
    category: "Brincos",
    mainImageUrl: "/products/brinco-prata.png",
    call: "O complemento perfeito para qualquer ocasião",
  },
];

export const Products = [
  {
    name: "Aliança Clássica de Prata",
    category: ["Alianças"],
    description:
      "Uma aliança clássica e elegante, feita de prata de alta qualidade, perfeita para celebrações especiais.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 120,
    highlighted: true,
    lastUnits: false,
    release: true,
  },
  {
    name: "Aliança Eternidade de Prata",
    category: ["Alianças"],
    description:
      "Uma aliança de prata com detalhes em relevo, simbolizando amor eterno.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 150,
    highlighted: false,
    release: false,
  },
  {
    name: "Aliança Slim de Prata",
    category: ["Alianças"],
    description:
      "Uma aliança slim, elegante e discreta, feita de prata pura, ideal para uso diário.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 80,
    lastUnits: true,
    release: false,
  },
  {
    name: "Aliança Cravejada de Prata",
    category: ["Alianças"],
    description:
      "Aliança de prata cravejada com pequenos diamantes, perfeita para ocasiões especiais.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 200,
    highlighted: false,
    lastUnits: false,
  },
  {
    name: "Aliança de Compromisso de Prata",
    category: ["Alianças"],
    description:
      "Aliança de prata simples e elegante, ideal para simbolizar compromissos importantes.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 100,
    highlighted: true,
    release: false,
  },
  {
    name: "Anel Torcido de Prata",
    category: ["Anéis"],
    description:
      "Um anel moderno de design torcido feito de prata de alta qualidade. Perfeito para uso diário.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 45,
    lastUnits: true,
    release: false,
  },
  {
    name: "Anel Solitário de Prata",
    category: ["Anéis"],
    description:
      "Um anel solitário clássico com um pequeno diamante, feito de prata de alta qualidade.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 70,
    highlighted: false,
    lastUnits: false,
    release: true,
  },
  {
    name: "Anel Ajustável de Prata",
    category: ["Anéis"],
    description:
      "Um anel ajustável, feito de prata pura, ideal para qualquer tamanho de dedo.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 55,
    highlighted: true,
    lastUnits: true,
    release: false,
  },
  {
    name: "Anel com Pedra Azul de Prata",
    category: ["Anéis"],
    description:
      "Um anel elegante com uma pedra azul, feito de prata de alta qualidade.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 85,
    highlighted: false,
    lastUnits: false,
  },
  {
    name: "Anel Minimalista de Prata",
    category: ["Anéis"],
    description:
      "Um anel minimalista, feito de prata pura, perfeito para um look discreto.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 40,
    release: false,
  },
  {
    name: "Pulseira Delicada de Prata",
    category: ["Pulseiras"],
    description:
      "Uma pulseira delicada feita de prata pura, ideal para complementar qualquer look.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 60,
    highlighted: false,
    lastUnits: true,
    release: true,
  },
  {
    name: "Pulseira Trançada de Prata",
    category: ["Pulseiras"],
    description:
      "Uma pulseira elegante com design trançado, feita de prata pura.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 85,
    highlighted: true,
    lastUnits: false,
    release: false,
  },
  {
    name: "Pulseira com Pingentes de Prata",
    category: ["Pulseiras"],
    description:
      "Uma pulseira charmosa com pingentes delicados, feita de prata de alta qualidade.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 75,
    highlighted: false,
  },
  {
    name: "Pulseira Rígida de Prata",
    category: ["Pulseiras"],
    description:
      "Uma pulseira rígida de prata, perfeita para um look sofisticado.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 90,
    lastUnits: false,
    release: false,
  },
  {
    name: "Pulseira com Pérolas de Prata",
    category: ["Pulseiras"],
    description:
      "Uma pulseira delicada com pérolas e prata, ideal para eventos formais.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 110,
    highlighted: false,
    lastUnits: true,
  },
  {
    name: "Berlock Coração de Prata",
    category: ["Berlocks"],
    description:
      "Um berlock em formato de coração, feito de prata de alta qualidade, para personalizar sua pulseira.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 25,
    highlighted: false,
    lastUnits: false,
    release: true,
  },
  {
    name: "Berlock Estrela de Prata",
    category: ["Berlocks"],
    description:
      "Um berlock em formato de estrela, feito de prata, ideal para personalizar suas joias.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 20,
    highlighted: true,
    release: false,
  },
  {
    name: "Berlock Flor de Prata",
    category: ["Berlocks"],
    description:
      "Um berlock delicado em formato de flor, feito de prata de alta qualidade.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 22,
    highlighted: false,
    lastUnits: false,
  },
  {
    name: "Berlock Borboleta de Prata",
    category: ["Berlocks"],
    description:
      "Um berlock encantador em formato de borboleta, feito de prata pura.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 27,
    release: false,
  },
  {
    name: "Berlock Círculo de Prata",
    category: ["Berlocks"],
    description:
      "Um berlock simples em formato de círculo, feito de prata de alta qualidade.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 18,
    highlighted: false,
    lastUnits: false,
    release: true,
  },
  {
    name: "Brincos Argola de Prata",
    category: ["Brincos"],
    description:
      "Brincos de argola clássicos, feitos de prata pura, perfeitos para qualquer ocasião.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 35,
    lastUnits: true,
    release: false,
  },
  {
    name: "Brincos Pendurados de Prata",
    category: ["Brincos"],
    description:
      "Brincos pendurados elegantes, feitos de prata pura, perfeitos para ocasiões formais.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 50,
    highlighted: false,
    lastUnits: false,
  },
  {
    name: "Brincos Pérola de Prata",
    category: ["Brincos"],
    description:
      "Brincos clássicos de pérola, com detalhes em prata pura, ideais para um look sofisticado.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 45,
    highlighted: true,
    release: false,
  },
  {
    name: "Brincos de Prata com Diamante",
    category: ["Brincos"],
    description:
      "Brincos de prata com um pequeno diamante, perfeitos para eventos especiais.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 75,
    highlighted: false,
    lastUnits: false,
    release: true,
  },
  {
    name: "Brincos Geométricos de Prata",
    category: ["Brincos"],
    description:
      "Brincos com design geométrico moderno, feitos de prata pura, ideais para um look contemporâneo.",
    imageUrl:
      "https://images.pexels.com/photos/2375114/pexels-photo-2375114.jpeg",
    price: 65,
    lastUnits: true,
    release: false,
  },
];

export const GeneralVisibleHiddenExitMotionVariants = {
  hidden: {
    opacity: 0.2,
    scale: 0.95, // Scale down slightly
    transition: {
      duration: 0.5,
      ease: easeBackInOut, // Use an easing function
    },
  },
  visible: {
    opacity: 1,
    scale: 1, // Scale down slightly
    transition: {
      duration: 0.5,
      ease: easeBackInOut, // Use an easing function
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05, // Scale down slightly

    transition: {
      duration: 0.01,
      ease: easeBackInOut, // Use an easing function
    },
  },
};
