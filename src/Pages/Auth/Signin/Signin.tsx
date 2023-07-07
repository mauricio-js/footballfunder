import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FORGOTPASSWORD_URL,
  SIGNUP_URL,
  HOME_URL,
  useAxios,
  useIsMounted,
} from "Lib";
import { StatusContext } from "App/StatusProvider";
import { Button, Input, TextButton, Template } from "UI";
import { AccountEmailData, AccountPasswordData } from "Config";
import { loginFormDataType } from "./types";

export const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { setSafely } = useIsMounted();
  const { showStatus } = useContext(StatusContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const { setSafely } = useIsMounted();

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const data: loginFormDataType = {
    action: "validate-login",
    email: formValues.email,
    password: formValues.password,
  };

  const axios = useAxios();

  const handleSubmit = () => {
    setSafely(setIsLoading, true);
    axios
      .post(`/auth/login`, data)
      .then((res) => {
        console.log(res);
        // const data = res.data as FetchLoginDataResponseType;
        setSafely(setIsLoading, false);
        // dispatch(setLogin(res.data));
        navigate(HOME_URL);
      })
      .catch((err) => {
        const errorMessage = err.response?.data.error;
        console.log(errorMessage);
        showStatus(errorMessage, 'error')
        setSafely(setIsLoading, false);
      });
  };
  const goToSignUp = () => {
    navigate(SIGNUP_URL);
  };
  const goToForgotPasswordPage = () => {
    navigate(FORGOTPASSWORD_URL);
  };
  return (
    <Template isLoading={isLoading}>
      <form onSubmit={handleSubmit}>
        <div className=" w-[1000px] max-lg:w-full px-5 mb-[300px] max-md:mb-[150px] mx-auto sm:mt-[60px] mt-5">
          <div className=" xs:w-[500px]">
            <div className="generalTitle">Welcome back</div>
            <div className="mt-15 flex gap-1">
              <div className="introText">New to Football Funder?</div>
              <TextButton text="Sign Up" handleClick={goToSignUp} />
            </div>
            <div className="mt-30">
              <Input
                data={AccountEmailData}
                name="email"
                onChange={handleInputChange}
                value={formValues.email || ""}
              />
              <div className="mt-2.5">
                <Input
                  data={AccountPasswordData}
                  name="password"
                  onChange={handleInputChange}
                  value={formValues.password || ""}
                />
              </div>
            </div>
            <div className="mt-30">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Sign in"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
            <div className="mt-30">
              <TextButton
                text="I forgot my password"
                handleClick={goToForgotPasswordPage}
              />
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
