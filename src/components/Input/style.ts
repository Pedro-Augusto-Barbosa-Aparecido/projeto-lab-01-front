import styled, { keyframes } from "styled-components";

import * as Tooltip from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  border: 0;

  padding: 10px 15px;

  font-size: 15;
  line-height: 1;

  color: ${(props) => props.theme["blue-200"]};
  background-color: ${(props) => props.theme["gray-400"]};
  user-select: none;

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-state="delayed-open"] {
      &[data-side="top"] {
        animation-name: ${slideDownAndFade};
      }

      &[data-side="right"] {
        animation-name: ${slideLeftAndFade};
      }

      &[data-side="bottom"] {
        animation-name: ${slideUpAndFade};
      }

      &[data-side="left"] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${(props) => props.theme["gray-400"]};
  height: 10px;
`;

export const TooltipTrigger = styled(Tooltip.Trigger)`
  cursor: help;
`;

export const MessageTip = styled.p`
  max-width: 300px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 0.5rem;
`;

export const InputContainerIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(props) => props.theme["gray-500"]};

  border-radius: 6px;

  width: 100%;
  height: 50px;
`;

export const BaseInput = styled.input`
  width: 100%;
  flex: 12;

  outline: none;
  border: none;

  background-color: transparent;
  color: ${(props) => props.theme["gray-300"]};

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  padding: 8px;

  height: 100%;
`;

export const BaseLabel = styled.label`
  font-size: 1.2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 12px;
`;

export const BaseIconContainer = styled.span`
  width: 10%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme["gray-300"]};
`;
