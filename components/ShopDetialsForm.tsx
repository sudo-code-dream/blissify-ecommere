import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { DropdownMenu } from "./ui/dropdown-menu";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Clothing & Apparel",
  "Electronics & Gadgets",
  "Home & Living",
  "Beauty & Personal Care",
  "Health & Wellness",
  "Food & Beverages",
  "Groceries",
  "Books & Stationery",
  "Toys & Games",
  "Sports & Fitness",
  "Jewelry & Accessories",
  "Automotive",
  "Mobile Phones & Accessories",
  "Pet Supplies",
  "Handmade & Crafts",
  "Furniture",
  "Digital Products",
  "Tools & Hardware",
  "Garden & Outdoor",
  "Office Supplies",
  "Kids & Baby Products",
  "Footwear",
  "Art & Collectibles",
  "Pharmacy / Medical Supplies",
  "Other",
];

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
type ShopDetailsFormProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
};

export default function ShopDetailsForm({ formRef }: ShopDetailsFormProps) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <form ref={formRef}>
      <Grid container spacing={3}>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='shopName' required>
            Shop Name
          </FormLabel>
          <OutlinedInput
            id='shopName'
            name='shopName'
            type='name'
            placeholder='John'
            autoComplete='first name'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='shopCategory' required>
            Shop Category
          </FormLabel>
          <Select
            labelId='shopCategory'
            id='shopCategory'
            name='shopCategory'
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label='Tag' />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor='shopDescription' required>
            Shop Description
          </FormLabel>
          <OutlinedInput
            id='shopDescription'
            name='shopDescription'
            type='shopDescription'
            placeholder='Shop Description'
            required
            multiline
            rows={4}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor='logo'>Shop Logo/Image</FormLabel>
          <OutlinedInput
            id='logo'
            name='logo'
            type='file'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='shopCity' required>
            City
          </FormLabel>
          <OutlinedInput
            id='shopCity'
            name='shopCity'
            type='shopCity'
            placeholder='New York'
            autoComplete='City'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='shopState' required>
            State
          </FormLabel>
          <OutlinedInput
            id='shopState'
            name='shopState'
            type='text'
            placeholder='NY'
            autoComplete='State'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='shopZipCode' required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInput
            id='shopZipCode'
            name='shopZipCode'
            type='text'
            placeholder='12345'
            autoComplete='shipping postal-code'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='shopCountry' required>
            Country
          </FormLabel>
          <OutlinedInput
            id='shopCountry'
            name='shopCountry'
            type='text'
            placeholder='Philippines'
            autoComplete='shipping country'
            required
            size='small'
          />
        </FormGrid>
      </Grid>
    </form>
  );
}
