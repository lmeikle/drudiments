import React, { useState } from 'react';
import styled from 'styled-components';
import Rudiment from './rudiment/Rudiment';

const PageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ButtonContainer = styled.div``;

const RudimentsContainer = styled.div`
  display: grid;
  max-width: 80em;
  margin: auto;

  ${({ gridLayout }) => {
    switch (gridLayout) {
      case GRID_LAYOUTS.FIXED: {
        // does not wrap or grow
        return `grid-template-columns: 25em 25em 25em;
          grid-template-rows: 150px 150px 150px 150px;`;
      }
      case GRID_LAYOUTS.FRACTIONS: {
        // grows but does not wrap
        return `grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: 150px 150px 150px 150px; `;
      }
      case GRID_LAYOUTS.REPEAT: {
        // just shows how to write repeat shorthand
        return `grid-template-columns: repeat(3, 25em);  
          grid-template-rows: repeat(4, 150px);`;
      }
      case GRID_LAYOUTS.FIXED_AUTOFILL: {
        // automatically wraps but columns always a fixed size (so we get blank gaps on the side)
        // with fixed widths auto-fit vs auto-fill makes no difference
        return `grid-template-columns: repeat(auto-fill, 25em);
          grid-template-rows: repeat(4, 150px);`;
      }
      case GRID_LAYOUTS.FIXED_AUTOFIT: {
        // automatically wraps but columns always a fixed size (so we get blank gaps on the side)
        // with fixed widths auto-fit vs auto-fill makes no difference
        return `grid-template-columns: repeat(auto-fit, 25em);
          grid-template-rows: repeat(4, 150px);`;
      }
      case GRID_LAYOUTS.MINMAX_FIXED_AUTOFILL: {
        // using auto-fill here means if there is space for another column it will
        // create one even when there is no content for it, so you can get blank gaps on the side
        // you can only see this if you run it with 2 rudiments
        return `grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));  
        grid-template-rows: 150px 150px 150px 150px; `;
      }
      case GRID_LAYOUTS.MINMAX_FIXED_AUTOFIT: {
        // auto-fit will not put empty columns like above
        // you can only see this if you run it with 2 rudiments
        return `grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));  
        grid-template-rows: 150px 150px 150px 150px; `;
      }
      default:
        return ``;
    }
  }}
`;

const GRID_LAYOUTS = {
  FIXED: 'FIXED',
  FRACTIONS: 'FRACTIONS',
  FIXED_AUTOFIT: 'FIXED_AUTOFIT',
  FIXED_AUTOFILL: 'FIXED_AUTOFILL',
  MINMAX_FIXED_AUTOFILL: 'MINMAX_FIXED_AUTOFILL',
  MINMAX_FIXED_AUTOFIT: 'MINMAX_FIXED_AUTOFIT', // THIS IS THE ONE I WANT
};

const RudimentsPage = () => {
  const rudiments = Array(12).fill({});
  const [gridLayout, updateGridLayout] = useState(GRID_LAYOUTS.FIXED);

  return (
    <PageContainer>
      <ButtonContainer>
        {Object.keys(GRID_LAYOUTS).map(val => (
          <button
            type="button"
            key={val}
            onClick={() => {
              updateGridLayout(GRID_LAYOUTS[val]);
            }}
          >
            {GRID_LAYOUTS[val]}
          </button>
        ))}
      </ButtonContainer>
      <RudimentsContainer gridLayout={gridLayout}>
        {rudiments.map((val, i) => {
          return <Rudiment key={i} />;
        })}
      </RudimentsContainer>
    </PageContainer>
  );
};

export default RudimentsPage;
