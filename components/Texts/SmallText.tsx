import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

// types
import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = (props) => {
  const { textStyles, children } = props;
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default SmallText;