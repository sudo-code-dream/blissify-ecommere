import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const products = [
  {
    name: "Full Name",
    desc: "",
    price: "",
  },
  {
    name: "Store Name",
    desc: "",
    price: "",
  },
  {
    name: "Age",
    desc: "",
    price: "",
  },
  {
    name: "Address",
    desc: "",
    price: "",
  },
];

interface InfoProps {
  totalPrice: string;
}

export default function InfoPlaceHolder({ totalPrice }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant='subtitle2' sx={{ color: "text.secondary" }}>
        Shop Application
      </Typography>
      <Typography variant='h4' gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant='body1' sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
