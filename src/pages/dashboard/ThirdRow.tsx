import PillListItem from "../../styled-components/components/PillListItem/index";
import PillList from "../../styled-components/components/PillList/index";

const data = [
  {
    label: "Databases",
    value: 100,
  },
  {
    label: "Security Systems",
    value: 100,
  },
  {
    label: "Application Servers",
    value: 99,
  },
  {
    label: "File Servers",
    value: 97,
  },
  {
    label: "ERP Systems",
    value: 95,
  },
  {
    label: "Directory Services",
    value: 93,
  },
  {
    label: "Cloud Storage",
    value: 92,
  },
  {
    label: "Virtual Machine Hosts",
    value: 88,
  },
  {
    label: "Network Configurations",
    value: 86,
  },
  {
    label: "CRM Systems",
    value: 82,
  },
  {
    label: "Email Servers",
    value: 75,
  },
  {
    label: "Document Systems",
    value: 72,
  },
];

type DataItem = {
  label: string;
  value: number;
};

const items = data.map((item: DataItem, i) => {
  return <PillListItem value={item.value} label={item.label} />;
});

export default function ThirdRow() {
  return <PillList>{items}</PillList>;
}
