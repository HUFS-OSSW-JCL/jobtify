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
import { useNavigate } from "react-router-dom";
import AuthContext from "../util/AuthContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("LOGGED_IN")) {
      navigate("/");
    }
  }, []);

  const emailInputHandler = (e) => {
    setLoginForm((prevState) => {
      return { ...prevState, email: e.target.value };
    });
    setEmailError(false);
  };

  const pwInputHandler = (e) => {
    setLoginForm((prevState) => {
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
  const [loginError, setLoginError] = useState("");

  const onLogin = async () => {
    if (loginForm.email.length === 0) {
      setEmailError(true);
      setEmailErrorMsg("이메일을 입력해주세요");
      return;
    } else {
      setEmailError(false);
    }
    if (!loginForm.email.includes("@")) {
      setEmailError(true);
      setEmailErrorMsg("올바른 이메일을 입력해주세요");
      return;
    } else {
      setEmailError(false);
    }
    if (loginForm.password.length < 6) {
      setPwError(true);
      setPwErrorMsg("비밀번호를 여섯자리 이상 입력해주세요");
      return;
    } else {
      setPwError(false);
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      ).then((user) => {
        // console.log(user);
        navigate(`/`);
        login();
      });
    } catch (e) {
      console.log(e.code);
      setLoginError(e.code);

      if (loginError === "auth/invalid-email") {
        setEmailError(true);
        setEmailErrorMsg("이메일을 확인해주세요");
      }
      if (loginError === "auth/wrong-password") {
        setPwError(true);
        setPwErrorMsg("비밀번호가 일치하지 않습니다");
      }
      if (loginError === "auth/user-not-found") {
        setEmailError(true);
        setEmailErrorMsg("이메일을 확인해주세요");
      }
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="container max-w-[390px] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-main font-bold text-[44px] mt-[147px]">Jobtify</h1>
        <form>
          <Center mt="65px">
            <FormControl variant="floating" id="email" isInvalid={emailError}>
              <Input
                type="id"
                value={loginForm.email}
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
                value={loginForm.password}
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
        {loginError && <p>{loginError}</p>}
      </div>
    </ChakraProvider>
  );
};

export default LoginPage;
