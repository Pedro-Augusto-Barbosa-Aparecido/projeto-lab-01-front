import {
  LoginContainer,
  TabButton,
  TabRoot,
} from "../styles/pages/Login/styles";

import * as Tab from "@radix-ui/react-tabs";
import { useState } from "react";
import { FormsCreateAccount } from "../components/pages/Forms/FormsCreateAccount";
import { FormsLogin } from "../components/pages/Forms/FormsLogin";

export default function Login() {
  const [activeTab, setActiveTab] = useState<string>("create");

  return (
    <LoginContainer>
      <TabRoot
        defaultValue="create"
        onValueChange={(value) => {
          setActiveTab(value);
        }}
      >
        <Tab.List>
          <TabButton isTabActive={activeTab === "create"} value="create">
            Create Account
          </TabButton>
          <TabButton isTabActive={activeTab === "login"} value="login">
            Log In
          </TabButton>
        </Tab.List>
        <FormsCreateAccount />
        <FormsLogin />
      </TabRoot>
    </LoginContainer>
  );
}
