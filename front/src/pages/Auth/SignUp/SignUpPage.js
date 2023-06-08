import {
  ChakraProvider,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  extendTheme,
  Center,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
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

const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    re_password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("LOGGED_IN")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emailInputHandler = (e) => {
    setSignUpForm((prevState) => {
      return { ...prevState, email: e.target.value };
    });
    setEmailError(false);
  };

  const pwInputHandler = (e) => {
    setSignUpForm((prevState) => {
      return { ...prevState, password: e.target.value };
    });
    setPwError(false);
  };

  const rePwInputHandler = (e) => {
    setSignUpForm((prevState) => {
      return { ...prevState, re_password: e.target.value };
    });
    setRePwError(false);
  };

  const auth = getAuth();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [rePwError, setRePwError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [rePwErrorMsg, setRePwErrorMsg] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const onSignUp = async () => {
    if (signUpForm.email.length === 0) {
      setEmailError(true);
      setEmailErrorMsg("이메일을 입력해주세요");
      return;
    }
    if (!signUpForm.email.includes("@")) {
      setEmailError(true);
      setEmailErrorMsg("올바른 이메일을 입력해주세요");
      return;
    }
    if (signUpForm.password.length < 6) {
      setPwError(true);
      setPwErrorMsg("비밀번호를 여섯자리 이상 입력해주세요");
      return;
    }
    if (signUpForm.re_password === 0) {
      setRePwError(true);
      setRePwErrorMsg("비밀번호를 다시 입력해주세요");
      return;
    }
    if (signUpForm.re_password !== signUpForm.password) {
      setRePwError(true);
      setRePwErrorMsg("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        signUpForm.email,
        signUpForm.password
      ).then((user) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            localStorage.setItem("UID", user.uid);
            localStorage.setItem("LOGGED_IN", true);
          } else {
            console.log("no user");
          }
        });
        // const uid = user.uid;
        // localStorage.setItem("UID", uid);
        navigate(`/first`);
      });
    } catch (e) {
      console.log(e.code);
      setSignUpError(e.code);
    } finally {
      if (signUpError === "auth/invalid-email") {
        setEmailError(true);
        setEmailErrorMsg("이메일을 확인해주세요");
      }
      if (signUpError === "auth/email-already-in-use") {
        setEmailError(true);
        setEmailErrorMsg("이미 사용중인 이메일입니다");
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
      <div className="container max-w-[390px] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-main font-bold text-[44px] mt-[147px]">회원가입</h1>
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
              {!pwError ? (
                <FormHelperText>
                  비밀번호는 6자리 이상으로 입력해주세요
                </FormHelperText>
              ) : (
                <FormErrorMessage>{pwErrorMsg}</FormErrorMessage>
              )}
            </FormControl>
          </Center>
          <Center mt="16px">
            <FormControl
              variant="floating"
              id="re_password"
              isInvalid={rePwError}
            >
              <Input
                type="password"
                value={signUpForm.re_password}
                onChange={rePwInputHandler}
                placeholder=" "
                w="340px"
                h="56px"
              />
              <FormLabel>비밀번호 재입력</FormLabel>
              {rePwError && <FormErrorMessage>{rePwErrorMsg}</FormErrorMessage>}
            </FormControl>
          </Center>
          <button
            type="button"
            onClick={onSignUp}
            className="mt-[30px] bg-red hover:bg-red2 text-white font-main text-[20px] font-bold w-[340px] h-[56px] rounded-md"
          >
            회원가입
          </button>
        </form>
      </div>
    </ChakraProvider>
  );
};

export default SignUpPage;
