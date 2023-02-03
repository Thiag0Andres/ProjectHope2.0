interface IUserType {
  id: number;
  value: string;
  image_url: any;
  image_url_hover: any;
}
export const data: IUserType[] = [
  {
    id: 1,
    value: "angry",
    image_url: require("../../../assets/icons/mood_angry.png"),
    image_url_hover: require("../../../assets/icons/mood_angry_selected.png"),
  },
  {
    id: 2,
    value: "sad",
    image_url: require("../../../assets/icons/mood_sad.png"),
    image_url_hover: require("../../../assets/icons/mood_sad_selected.png"),
  },
  {
    id: 3,
    value: "neutral",
    image_url: require("../../../assets/icons/mood_neutral.png"),
    image_url_hover: require("../../../assets/icons/mood_neutral_selected.png"),
  },
  {
    id: 4,
    value: "happy",
    image_url: require("../../../assets/icons/mood_happy.png"),
    image_url_hover: require("../../../assets/icons/mood_happy_selected.png"),
  },
];
