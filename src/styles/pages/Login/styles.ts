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
  width: 600px;
  border-radius: 6px;
  box-shadow: rgba(244, 244, 244, 0.6) 0px 4px 8px -2px,
    rgba(244, 244, 244, 0.3) 0px 0px 0px 1px;
`;

interface TabButtonProps {
  isTabActive?: boolean;
}

export const TabList = styled(Tab.List)`
  display: flex;
`;

export const TabButton = styled(Tab.Trigger)<TabButtonProps>`
  padding: 6px 12px;

  background: none !important;

  border: 0;

  font-family: "Roboto", sans-serif;
  font-weight: bold;

  color: ${(props) => props.theme["gray-300"]};

  cursor: pointer;
  width: 40%;
  height: 50px;

  background-color: ${(props) => props.theme["gray-400"]} !important;
  border-bottom: 2px solid transparent;

  ${(props) => props.isTabActive && "width: 60%"};
  ${(props) => {
    if (props.isTabActive) {
      return `
        border-bottom-color: ${props.theme["blue-700"]};
        color: ${props.theme["blue-700"]};
        box-shadow: ${props.theme["blue-700"]} 0px -50px 16px -55px inset;
      `;
    }
    return ``;
  }}

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }
`;
