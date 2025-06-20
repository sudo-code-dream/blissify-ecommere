import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

type UserDetailsFormProps = {
  formRef: React.RefObject<HTMLFormElement | null>;
};

export default function UserDetailsForm({ formRef }: UserDetailsFormProps) {
  return (
    <form ref={formRef}>
      <Grid container spacing={3}>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='first-name' required>
            First name
          </FormLabel>
          <OutlinedInput
            id='first-name'
            name='first-name'
            type='text'
            placeholder='John'
            autoComplete='first name'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='last-name' required>
            Last name
          </FormLabel>
          <OutlinedInput
            id='last-name'
            name='last-name'
            type='text'
            placeholder='Snow'
            autoComplete='last name'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor='address1' required>
            Address line 1
          </FormLabel>
          <OutlinedInput
            id='address1'
            name='address1'
            type='text'
            placeholder='Street name and number'
            autoComplete='shipping address-line1'
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
            type='text'
            placeholder='New York'
            autoComplete='city'
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
            type='text'
            placeholder='NY'
            autoComplete='state'
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
            type='text'
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
