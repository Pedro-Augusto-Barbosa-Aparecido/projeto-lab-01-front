import {
  LoginContainer,
  TabButton,
  TabRoot,
} from "../styles/pages/Login/styles";

import * as Tab from "@radix-ui/react-tabs";

export default function Login() {
  return (
    <LoginContainer>
      <TabRoot defaultValue="create">
        <Tab.List>
          <TabButton isActive value="create">
            Create Account
          </TabButton>
          <TabButton value="login">Entrar</TabButton>
        </Tab.List>
        <Tab.Content value="create">
          <p>create</p>
        </Tab.Content>
        <Tab.Content value="login">
          <p>login</p>
        </Tab.Content>
      </TabRoot>
    </LoginContainer>
  );
}
