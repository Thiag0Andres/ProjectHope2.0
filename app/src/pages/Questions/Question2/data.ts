interface IUserType {
  id: number;
  title: string;
  value: string;
  description: string;
}
export const data: IUserType[] = [
  {
    id: 1,
    title: "Muito dependente",
    value: "very dependent",
    description: "Não tenho mais controle algum sobre meu consumo de drogas.",
  },
  {
    id: 2,
    title: "Dependente",
    value: "dependent",
    description:
      "Sinto que ainda tenho algum controle, mas não sei até quando conseguirei.",
  },
  {
    id: 3,
    title: "Pouco dependente",
    value: "little dependent",
    description:
      "Consigo levar uma vida normal a maior parte do tempo, mas tenho recaídas.",
  },
];
