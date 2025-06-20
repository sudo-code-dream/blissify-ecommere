import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const products = [
  {
    name: "Full Name",
    desc: "Kenneth Jr. O. Dean",
    price: "$15.00",
  },
  {
    name: "Store Name",
    desc: "Blissy Bliss",
    price: "$49.99",
  },
  {
    name: "Age",
    desc: "25",
    price: "Free",
  },
  {
    name: "Address",
    desc: "Landing, Catarman, Liloan, Cebu 6002, Philippines",
    price: "$69.99",
  },
];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
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
