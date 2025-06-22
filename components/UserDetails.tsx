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
          <FormLabel htmlFor='firstName' required>
            First name
          </FormLabel>
          <OutlinedInput
            id='firstName'
            name='firstName'
            type='text'
            placeholder='John'
            autoComplete='first name'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor='lastName' required>
            Last name
          </FormLabel>
          <OutlinedInput
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Snow'
            autoComplete='last name'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor='userAddress' required>
            Address line 1
          </FormLabel>
          <OutlinedInput
            id='userAddress'
            name='userAddress'
            type='text'
            placeholder='Street name and number'
            autoComplete='shipping address-line1'
            required
            size='small'
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='userCity' required>
            City
          </FormLabel>
          <OutlinedInput
            id='userCity'
            name='userCity'
            type='text'
            placeholder='New York'
            autoComplete='city'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='userState' required>
            State
          </FormLabel>
          <OutlinedInput
            id='userState'
            name='userState'
            type='text'
            placeholder='NY'
            autoComplete='state'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='userZipCode' required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInput
            id='userZipCode'
            name='userZipCode'
            type='text'
            placeholder='12345'
            autoComplete='shipping postal-code'
            required
            size='small'
          />
        </FormGrid>

        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor='userCountry' required>
            Country
          </FormLabel>
          <OutlinedInput
            id='userCountry'
            name='userCountry'
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
