import {
  ChakraProvider,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  extendTheme,
  Center,
} from "@chakra-ui/react";

import FilterHeader from "./FilterHeader";
import Keyword from "./Keyword";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-31px)",
};
const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 2,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const AddFilter = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="container max-w-[395px] mx-auto flex flex-col items-center justify-center">
        <FilterHeader />
        <form className="flex flex-col justify-center">
          <Center mt="40px">
            <FormControl variant="floating" id="text" isRequird>
              <Input placeholder=" " w="340px" h="56px" />
              <FormLabel>필터명</FormLabel>
              <FormErrorMessage>
                올바른 필터명을 입력 해주세요.
              </FormErrorMessage>
            </FormControl>
          </Center>
          <p className="mt-[30px] font-main text-[18px] text-black font-bold">
            직무 키워드
          </p>
          <Keyword />
        </form>
      </div>
    </ChakraProvider>
  );
};

export default AddFilter;
