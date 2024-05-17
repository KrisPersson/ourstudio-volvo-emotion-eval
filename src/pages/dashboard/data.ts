import { colors } from "../../styles/index"
export const dropdownData = [
    {
        label: "Last 30 days",
        value: 30
    },
    {
        label: "Last 14 days",
        value: 14
    },
    {
        label: "Last 7 days",
        value: 7
    }
]

export const threatsData = ["threatname", "nameofthreat", "aggresivethreat"];
export const incidentsData = [
    {
      value: 13,
      label: "major",
    },
    {
      value: 10,
      label: "medium",
    },
    {
      value: 20,
      label: "minor",
    },
  ];

  export const backupRatingData = [
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

  export const sourceCodeData = [
    {
      name: "low",
      value: 4,
      color: colors.tertiary.surface,
    },
    {
      name: "medium",
      value: 3,
      color: colors.secondary.surface,
    },
    {
      name: "high",
      value: 5,
      color: colors.warning.default,
    },
    {
      name: "critical",
      value: 4,
      color: colors.danger.default,
    },
  ];
  
  export const accessControlData = [
    {
      name: "admin",
      value: 64,
      color: colors.primary.surface,
    },
    {
      name: "superusers",
      value: 55,
      color: colors.secondary.surface,
    },
    {
      name: "viewers",
      value: 244,
      color: colors.tertiary.surface,
    },
  ];