import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { colors } from "../colors";

import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// Navigation
import { useNavigation } from "@react-navigation/native";



const CardBackground = styled.View`
  height: 180px;
  width: ${ScreenWidth * 0.3}px;
  background-color: ${colors.white};
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: 15px; /* Added spacing between cards */
`;

const ImageSection = styled.Image`
  height: 60%;
  width: 100%;
  border-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${colors.gray}; /* Default background color */
`;

const BottomSection = styled.View`
  height: 40%;
  width: 100%;
  padding: 10px 15px;
  justify-content: space-between;
  background-color: ${colors.white};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px; /* Reduced vertical spacing */
`;

const LeftText = styled.View`
  align-items: flex-start;
`;

const RightText = styled.View`
  align-items: flex-end;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 15px;
`;


// types
import { RoutineCardProps } from "../Routine/types";
import { ScreenWidth } from "../shared";

const RoutineCard: FunctionComponent<RoutineCardProps> = (props) => {

  return (
    <CardBackground>
      <>
        {/* Top Image Section */}
        <ImageSection source={props.img} />

        {/* Bottom Section */}
        <BottomSection>
          <Row>
            {/* Routine Details */}
            <LeftText>
              <RegularText textStyles={{ color: colors.primary }}>
                {props.routine}
              </RegularText>
            </LeftText>

            {/* Date (right-aligned) */}
            <RightText>
              <SmallText textStyles={{ color: colors.darkgray }}>
                {props.date}
              </SmallText>
            </RightText>
          </Row>

          <Row>
            <SmallText textStyles={{ color: colors.secondary }}>
              {props.equipment}
            </SmallText>
          </Row>
        </BottomSection>
      </>
    </CardBackground>
  );

};

export default RoutineCard;