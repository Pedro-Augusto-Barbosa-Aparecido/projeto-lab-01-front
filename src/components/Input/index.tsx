import { Question } from "phosphor-react";
import React from "react";
import {
  BaseIconContainer,
  BaseInput,
  BaseLabel,
  InputContainer,
  InputContainerIcon,
  MessageTip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./style";

import * as Tooltip from "@radix-ui/react-tooltip";

interface IInputProps
  extends React.HTMLAttributes<React.HTMLInputTypeAttribute> {
  textLabel: string;
  name: string;
  icon: React.ReactElement;
  tooltip?: boolean;
  tooltipText?: string;
  required?: boolean;
  type: "password" | "email" | "text";
}

export function Input({
  textLabel,
  icon,
  required,
  tooltip,
  tooltipText,
  ...rest
}: IInputProps) {
  return (
    <InputContainer>
      <BaseLabel htmlFor={rest.name}>
        {textLabel} {required ? "*" : ""}
        {tooltip && (
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <TooltipTrigger asChild>
                <Question />
              </TooltipTrigger>
              <Tooltip.Portal>
                <TooltipContent sideOffset={5}>
                  <MessageTip>{tooltipText}</MessageTip>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </BaseLabel>
      <InputContainerIcon>
        {/* @ts-ignore */}
        <BaseInput required={required} autoComplete="off" {...rest} />
        <BaseIconContainer>{icon}</BaseIconContainer>
      </InputContainerIcon>
    </InputContainer>
  );
}
