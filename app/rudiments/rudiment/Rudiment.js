import React from 'react';
import styled from 'styled-components';
import trebleClef from './treble-clef.png';

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

const Container = styled.div`
  position: relative;
  height: 6em;
  width: 25em;
  margin-bottom: 1em;
`;

const Line = styled.div`
  height: 20%;
  border-bottom: 1px solid black;
`;

const TimeSignature = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0.5em;
  left: -2em;
  height: 100%;
`;

const TrebleClef = styled.div`
  width: 6.25em;
  height: 120%;
  margin-top: 1.2em;
  background: url(${trebleClef});
  background-size: auto 100%;
  background-repeat: no-repeat;
`;

const Time = styled.div`
  font-size: 2.1em;
  font-weight: bold;
  line-height: 2.2rem;
`;

// Call something a bar
// Call something a phrase

const Rudiment = ({}) => {
  return (
    <GridContainer>
      <Container>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <TimeSignature>
          <TrebleClef />
          <Time>
            <div>4</div>
            <div>4</div>
          </Time>
        </TimeSignature>
      </Container>
    </GridContainer>
  );
};

export default Rudiment;
