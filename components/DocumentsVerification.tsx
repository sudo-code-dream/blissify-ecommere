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
type DocumentsVerificationProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
};

export default function DocumentsVerification({
  formRef,
}: DocumentsVerificationProps) {
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
          <FormLabel htmlFor='first-name' required>
            Shop Name
          </FormLabel>
          <OutlinedInput
            id='first-name'
            name='first-name'
            type='name'
            placeholder='John'
            autoComplete='first name'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='last-name' required>
            Shop Category
          </FormLabel>
          <Select
            labelId='demo-multiple-checkbox-label'
            id='demo-multiple-checkbox'
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
          <FormLabel htmlFor='address1' required>
            Shop Description
          </FormLabel>
          <OutlinedInput
            id='address1'
            name='address1'
            type='address1'
            placeholder='Street name and number'
            autoComplete='shipping address-line1'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor='address2'>Shop Logo/Image</FormLabel>
          <OutlinedInput
            id='address2'
            name='address2'
            type='file'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='city' required>
            City
          </FormLabel>
          <OutlinedInput
            id='city'
            name='city'
            type='city'
            placeholder='New York'
            autoComplete='City'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='state' required>
            State
          </FormLabel>
          <OutlinedInput
            id='state'
            name='state'
            type='state'
            placeholder='NY'
            autoComplete='State'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='zip' required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInput
            id='zip'
            name='zip'
            type='zip'
            placeholder='12345'
            autoComplete='shipping postal-code'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='country' required>
            Country
          </FormLabel>
          <OutlinedInput
            id='country'
            name='country'
            type='country'
            placeholder='United States'
            autoComplete='shipping country'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormControlLabel
            control={<Checkbox name='saveAddress' value='yes' />}
            label='Use this address for payment details'
          />
        </FormGrid>
      </Grid>
    </form>
  );
}
