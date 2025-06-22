import * as React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type:", detail: "Visa" },
  { name: "Card holder:", detail: "Mr. John Smith" },
  { name: "Card number:", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date:", detail: "04/2024" },
];

interface ReviewProps {
  formValues: Record<string, any>;
}

export default function Review({ formValues }: ReviewProps) {
  const fullAddress = `${formValues.shopCity}, ${formValues.shopState} ${formValues.shopZipCode}, ${formValues.shopCountry}`;
  const name = `${formValues.firstName} ${formValues.lastName}`;

  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='Shop Name' />
          <Typography variant='body2'>{formValues.shopName}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='Category' />
          <Typography variant='body2'>{formValues.shopCategory}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='Address' />
          <Typography variant='body2'>
            {fullAddress === undefined ? "" : fullAddress}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction='column'
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}>
        <div>
          <Typography variant='subtitle2' gutterBottom>
            Shop Details
          </Typography>
          <Typography gutterBottom>{formValues.shopName}</Typography>
          <Typography gutterBottom sx={{ color: "text.secondary" }}>
            {formValues.shopDescription}
          </Typography>
        </div>
        <div>
          <Typography variant='subtitle2' gutterBottom>
            User Details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Stack
                direction='row'
                spacing={1}
                useFlexGap
                sx={{ width: "100%", mb: 1 }}>
                <Typography variant='body1' sx={{ color: "text.secondary" }}>
                  Name
                </Typography>
                <Typography variant='body2'>{name}</Typography>
              </Stack>
            </React.Fragment>
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
