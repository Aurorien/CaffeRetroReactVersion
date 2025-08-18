import type { SectionItem } from "./shared/types";

export const sectionsData: SectionItem[] = [
  {
    id: "hot",
    variant: "hot",
    title: "Hot",
    firstParagraph:
      "Hot freshly ground black coffee or a cup of exquisite tea?",
    secondParagraph: "We give you that perfect cup every time.",
    menuItems: [
      {
        id: "972d2131-7c93-4270-b8ab-c1c3761dee50",
        name: "Mocha Latte",
        value: "€ 7.50",
      },
      {
        id: "14f3f216-4988-47bc-9fd8-4a6275b51a9f",
        name: "Caffe Formaggio",
        value: "€ 5.00",
      },
      {
        id: "2c295f5e-185d-4ee1-afca-86d7fa8a14e4",
        name: "Espresso",
        value: "€ 3.50",
      },
      {
        id: "55231355-b2c8-4537-8434-62de14ac8364",
        name: "Chai Verde Latte",
        value: "€ 5.50",
      },
    ],
  },
  {
    id: "juicy",
    variant: "juicy",
    title: "Juicy",
    firstParagraph: "Ripe fruit - freshly squeezed.",
    secondParagraph:
      "It's as simple as that. Chunky or smooth - it's your choice.",
    menuItems: [
      {
        id: "e4409fed-e546-40d2-beb2-438261917312",
        name: "Branched Apricotes",
        value: "€ 4.20",
      },
      {
        id: "22fbfe99-89d0-42ef-b5cf-e6d9520e97e7",
        name: "Deep Rasberries",
        value: "€ 3.50",
      },
      {
        id: "3722178a-df97-421e-acbf-f3647302f910",
        name: "Smooth Oranges",
        value: "€ 6.50",
      },
    ],
  },
  {
    id: "cosy",
    variant: "cosy",
    title: "Cosy",
    firstParagraph: "Hang around. Enjoy the settings.",
    secondParagraph: "Use our fast WiFi. Borrow a newspaper or a novel.",
    menuItems: [
      {
        id: "6b39bff8-6f42-436d-9bb8-892ccd2d7534",
        name: "Mon-Sun",
        value: "8am - 11pm",
      },
      {
        id: "d4b14962-8ec9-4b23-9a32-1e8ece51d9ea",
        name: "Caffe Retro",
        value: "Canto VI",
      },
      {
        id: "dd385e00-f5cd-4332-bce5-d9e66af2d774",
        name: "0123-45 67 89",
        value: "caffe@lorem.pge",
      },
    ],
  },
];
