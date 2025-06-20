"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import UserDetailsForm from "@/components/UserDetails";
import Info from "@/components/Info";
import InfoMobile from "@/components/InfoMobile";
import Review from "@/components/Review";
import SitemarkIcon from "@/components/SitemarkIcon";
import AppTheme from "@/theme/AppTheme";
import ColorModeIconDropdown from "@/theme/ColorModeIconDropDown";
import ShopDetailsForm from "@/components/ShopDetialsForm";
import DocumentsVerification from "@/components/DocumentsVerification";

const steps = [
  "Personal Information",
  "Shop Details",
  "Verification",
  "Review",
];
export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const userDetailsRef = React.useRef<HTMLFormElement>(null);
  const shopDetailsRef = React.useRef<HTMLFormElement>(null);
  const documentsVerificationRef = React.useRef<HTMLFormElement>(null);

  const handleNext = () => {
    if (activeStep === 0 && userDetailsRef.current) {
      const formData = new FormData(userDetailsRef.current);
      const data = Object.fromEntries(formData.entries());
      console.log("Step 1 (User Details):", data);
    }

    if (activeStep === 1 && shopDetailsRef.current) {
      const formData = new FormData(shopDetailsRef.current);
      const data = Object.fromEntries(formData.entries());
      console.log("Step 2 (Shop Details):", data);
    }

    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <UserDetailsForm formRef={userDetailsRef} />;
      case 1:
        return <ShopDetailsForm formRef={shopDetailsRef} />;
      case 2:
        return <DocumentsVerification formRef={documentsVerificationRef} />;
      case 3:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <AppTheme disableCustomTheme={false}>
      <CssBaseline enableColorScheme />
      <Box sx={{ position: "fixed", top: "1rem", right: "1rem" }}>
        <ColorModeIconDropdown />
      </Box>

      <Grid
        container
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100dvh - var(--template-frame-height, 0px))",
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}>
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 16,
            px: 10,
            gap: 4,
          }}>
          <SitemarkIcon />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500,
            }}>
            <Info totalPrice={activeStep ? "" : ""} />
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
            }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
              }}>
              <Stepper
                id='desktop-stepper'
                activeStep={activeStep}
                sx={{ width: "100%", height: 40 }}>
                {steps.map((label) => (
                  <Step
                    sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}
                    key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <div>
                <Typography variant='subtitle2' gutterBottom>
                  Selected products
                </Typography>
                <Typography variant='body1'>
                  {activeStep >= 2 ? "$144.97" : "$134.98"}
                </Typography>
              </div>
              <InfoMobile
                totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"}
              />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}>
            <Stepper
              id='mobile-stepper'
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: "flex", md: "none" } }}>
              {steps.map((label) => (
                <Step
                  sx={{
                    ":first-child": { pl: 0 },
                    ":last-child": { pr: 0 },
                    "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}>
                  <StepLabel
                    sx={{
                      ".MuiStepLabel-labelContainer": { maxWidth: "70px" },
                    }}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant='h1'>📦</Typography>
                <Typography variant='h5'>Thank you for your order!</Typography>
                <Typography variant='body1' sx={{ color: "text.secondary" }}>
                  Your order number is
                  <strong>&nbsp;#140396</strong>. We have emailed your order
                  confirmation and will update you once its shipped.
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    alignSelf: "start",
                    width: { xs: "100%", sm: "auto" },
                  }}>
                  Go to my orders
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={[
                    {
                      display: "flex",
                      flexDirection: { xs: "column-reverse", sm: "row" },
                      alignItems: "end",
                      flexGrow: 1,
                      gap: 1,
                      pb: { xs: 12, sm: 0 },
                      mt: { xs: 2, sm: 0 },
                      mb: "60px",
                    },
                    activeStep !== 0
                      ? { justifyContent: "space-between" }
                      : { justifyContent: "flex-end" },
                  ]}>
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant='text'
                      sx={{ display: { xs: "none", sm: "flex" } }}>
                      Previous
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant='outlined'
                      fullWidth
                      sx={{ display: { xs: "flex", sm: "none" } }}>
                      Previous
                    </Button>
                  )}
                  <Button
                    variant='contained'
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{ width: { xs: "100%", sm: "fit-content" } }}>
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ShopApplicationForm() {
//   const [form, setForm] = useState({
//     shopName: "",
//     image: "",
//     phone: "",
//     description: "",
//     address: "",
//     city: "",
//     province: "",
//     postalCode: "",
//     country: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/shop/apply", {
//       method: "POST",
//       body: JSON.stringify(form),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     setLoading(false);

//     if (res.ok) {
//       alert("Application submitted!");
//       router.push("/profile");
//     } else {
//       alert("Failed to submit. Try again.");
//     }
//   };

//   return (
//     <div className='max-w-2xl mx-auto px-4 py-10'>
//       <h1 className='text-2xl font-bold mb-4'>Apply for a Shop</h1>
//       <form onSubmit={handleSubmit} className='space-y-4'>
//         <input
//           className='w-full border p-2 rounded'
//           name='shopName'
//           placeholder='Shop Name'
//           required
//           value={form.shopName}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='image'
//           placeholder='Image URL'
//           value={form.image}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='phone'
//           placeholder='Phone Number'
//           value={form.phone}
//           onChange={handleChange}
//         />
//         <textarea
//           className='w-full border p-2 rounded'
//           name='description'
//           placeholder='Description'
//           rows={3}
//           value={form.description}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='address'
//           placeholder='Address'
//           value={form.address}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='city'
//           placeholder='City'
//           value={form.city}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='province'
//           placeholder='Province'
//           value={form.province}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='postalCode'
//           placeholder='Postal Code'
//           value={form.postalCode}
//           onChange={handleChange}
//         />
//         <input
//           className='w-full border p-2 rounded'
//           name='country'
//           placeholder='Country'
//           value={form.country}
//           onChange={handleChange}
//         />

//         <button
//           type='submit'
//           className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
//           disabled={loading}>
//           {loading ? "Submitting..." : "Submit Application"}
//         </button>
//       </form>
//     </div>
//   );
// }
