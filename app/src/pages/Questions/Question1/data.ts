interface IUserType {
  id: number;
  title: string;
  value: string;
  description: string;
  image_url: any;
  image_url_hover: any;
}

export const data: IUserType[] = [
  {
    id: 1,
    title: "Dependente",
    value: "dependent",
    description: "Sofro com dependência química e busco ajuda",
    image_url: require("../../../assets/icons/illustration_addicted.png"),
    image_url_hover: require("../../../assets/icons/illustration_addicted_selected.png"),
  },
  {
    id: 2,
    title: "Co-dependente",
    value: "co-dependent",
    description: "Quero ajudar um familiar ou amigo dependente",
    image_url: require("../../../assets/icons/illustration_family.png"),
    image_url_hover: require("../../../assets/icons/illustration_family_selected.png"),
  },
  {
    id: 3,
    title: "Ex-dependente",
    value: "ex-dependent",
    description: "Saí do mundo das drogas e busco ajudar outras pessoas",
    image_url: require("../../../assets/icons/illustration_former.png"),
    image_url_hover: require("../../../assets/icons/illustration_former_selected.png"),
  },
  {
    id: 4,
    title: "Especialista",
    value: "specialist",
    description: "Sou especialista e desejo ajudar mais pessoas",
    image_url: require("../../../assets/icons/illustration_specialist.png"),
    image_url_hover: require("../../../assets/icons/illustration_specialist_selected.png"),
  },
];
