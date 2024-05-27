import PillListItem from "../../styled-components/components/PillListItem/index";
import PillList from "../../styled-components/components/PillList/index";
import { backupRatingData } from "./data";

type DataItem = {
  label: string;
  value: number;
};

const items = backupRatingData.map((item: DataItem, i) => {
  return (
    <PillListItem value={item.value} label={item.label} key={i + "pill"} />
  );
});

export default function ThirdRow() {
  return <PillList>{items}</PillList>;
}
