import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ScrollView, SafeAreaView } from "react-native";

import { Container } from "@/components/shared";
import { colors } from "@/components/colors";

import AmountSection from "@/components/Balance/AmountSection";
import BalanceCardSection from "@/components/Balance/BalanceCardSection";
import ButtonSection from "@/components/Balance/ButtonSection";


const BalanceContainer = styled.View`
  background-color: ${colors.lightgray};
  width: 100%;
  flex: 1;
  padding: 25px;
`;


import { RootStackParamList } from "@/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Balance">;


const Balance: FunctionComponent<Props> = ({ route }) => {

  return (
    <BalanceContainer>
        <StatusBar style="dark" />
        <AmountSection balance={route?.params?.balance} />
        <BalanceCardSection {...route?.params} />
        <ButtonSection  />
    </BalanceContainer>
  );
};

export default Balance;


