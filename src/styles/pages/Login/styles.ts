import styled from "styled-components";
import * as Tab from "@radix-ui/react-tabs";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const TabRoot = styled(Tab.Root)`
  width: 400px;
`;

interface TabButtonProps {
  isActive?: boolean;
}

export const TabList = styled(Tab.List)`
  display: flex;
`;

export const TabButton = styled(Tab.Trigger)<TabButtonProps>`
  padding: 6px 12px;

  background: none !important;

  border: 0;

  font-family: "Roboto", sans-serif;

  cursor: pointer;
  width: 40%;

  background-color: ${(props) => props.theme["gray-400"]} !important;
  border: 1px solid ${(props) => props.theme["gray-300"]};
  ${(props) => props.isActive && "width: 60%"};
`;
