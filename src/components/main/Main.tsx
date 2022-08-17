import React from "react";
import styled from "styled-components";
import { Title } from "../../styles/common";
import Calendar from "../calendar";

const Container = styled.div`
  border-radius: 100px;
  background-color: var(--bg-main);
  margin: auto;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Calendar.DatePicker />
        <Calendar.TimePicker />
      </Wrapper>
    </Container>
  );
};

export default Main;
