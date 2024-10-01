import { Box, Image } from "@chakra-ui/react";

export const LNavbar = () => {
     return (
          <Box className="size-24 -mt-1 inline-flex align-middle ml-1">
               <Image src="/assets/logo/Tegal.dev-BBB-removebg.png" alt="Yumna Logo" boxSize="100%" objectFit="contain" />
          </Box>
     );
};
export const LBanner = () => {
     return (
          <Box className="size-52 inline-flex align-middle -mt-2 ml-2">
               <Image src="/assets/logo/Tegal.dev-BBB-removebg.png" alt="Yumna Logo" boxSize="100%" objectFit="contain" />
          </Box>
     );
};
export const LFooter = () => {
     return (
          <Box className="size-32 ml-4 -mt-9">
               <Image src="/assets/logo/Tegal.dev-BBB-removebg.png" alt="Yumna Logo" boxSize="100%" objectFit="contain" />
          </Box>
     );
};
