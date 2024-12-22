export const userInputs = (t) => [
  {
    id: 1,
    label: t("fromSourceUser.userName"),
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: t("fromSourceUser.NAS"),
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: t("fromSourceUser.email"),
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: t("fromSourceUser.phone"),
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: t("fromSourceUser.pass"),
    type: "password",
  },
  {
    id: 6,
    label: t("fromSourceUser.address"),
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: t("fromSourceUser.country"),
    type: "text",
    placeholder: "USA",
  },
];

export const productInputs = (t) => [
  {
    id: 1,
    label: t("fromSourceProducts.title"),
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: t("fromSourceProducts.desc"),
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: t("fromSourceProducts.cate"),
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: t("fromSourceProducts.price"),
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: t("fromSourceProducts.stock"),
    type: "text",
    placeholder: "in stock",
  },
];
