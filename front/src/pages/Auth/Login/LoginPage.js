import {
  ChakraProvider,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  extendTheme,
  Center,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../../util/AuthContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet";

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

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [signUpForm, setsignUpForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("LOGGED_IN")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emailInputHandler = (e) => {
    setsignUpForm((prevState) => {
      return { ...prevState, email: e.target.value };
    });
    setEmailError(false);
  };

  const pwInputHandler = (e) => {
    setsignUpForm((prevState) => {
      return { ...prevState, password: e.target.value };
    });
    setPwError(false);
  };

  const auth = getAuth();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [signUpError, setsignUpError] = useState("");

  const onLogin = async () => {
    if (signUpForm.email.length === 0) {
      setEmailError(true);
      setEmailErrorMsg("이메일을 입력해주세요");
      return;
    } else {
      setEmailError(false);
    }
    if (!signUpForm.email.includes("@")) {
      setEmailError(true);
      setEmailErrorMsg("올바른 이메일을 입력해주세요");
      return;
    } else {
      setEmailError(false);
    }
    if (signUpForm.password.length < 6) {
      setPwError(true);
      setPwErrorMsg("비밀번호를 여섯자리 이상 입력해주세요");
      return;
    } else {
      setPwError(false);
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        signUpForm.email,
        signUpForm.password
      ).then((user) => {
        // console.log(user);
        navigate(`/`);
        login();
      });
    } catch (e) {
      console.log(e.code);
      setsignUpError(e.code);
    } finally {
      if (signUpError === "auth/invalid-email") {
        setEmailError(true);
        setEmailErrorMsg("이메일을 확인해주세요");
      }
      if (signUpError === "auth/wrong-password") {
        setPwError(true);
        setPwErrorMsg("비밀번호가 일치하지 않습니다");
      }
      if (signUpError === "auth/user-not-found") {
        setEmailError(true);
        setEmailErrorMsg("이메일을 확인해주세요");
      }
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <div className="container min-w-[395px] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-main font-bold text-[44px] mt-[147px]">로그인</h1>
        <form>
          <Center mt="60px">
            <FormControl variant="floating" id="email" isInvalid={emailError}>
              <Input
                type="id"
                value={signUpForm.email}
                onChange={emailInputHandler}
                placeholder=" "
                w="340px"
                h="56px"
              />
              <FormLabel>이메일</FormLabel>
              {emailError && (
                <FormErrorMessage>{emailErrorMsg}</FormErrorMessage>
              )}
            </FormControl>
          </Center>
          <Center mt="16px">
            <FormControl variant="floating" id="password" isInvalid={pwError}>
              <Input
                type="password"
                value={signUpForm.password}
                onChange={pwInputHandler}
                placeholder=" "
                w="340px"
                h="56px"
              />
              <FormLabel>비밀번호</FormLabel>
              {pwError && <FormErrorMessage>{pwErrorMsg}</FormErrorMessage>}
            </FormControl>
          </Center>
          <button
            type="button"
            onClick={onLogin}
            className="mt-[30px] bg-red hover:bg-red2 text-white font-main text-[20px] font-bold w-[340px] h-[56px] rounded-md"
          >
            로그인
          </button>
        </form>
        {/* {signUpError && <p>{signUpError}</p>} */}
        <div className="flex flex-row mt-[30px]">
          <p className="font-main text-[16px] text-gray-500">
            계정이 없으신가요?
          </p>
          <Link to="/signup">
            <p className="ml-[5px] font-main text-[16px] text-red font-bold">
              회원가입하기
            </p>
          </Link>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default LoginPage;
