import styled from "styled-components";

type Props = {
  from: {
    x: number;
    y: number;
  };
  to: {
    x: number;
    y: number;
  };
};

export const Line = ({ from, to }: Props) => {
  const height = to.y - from.y;
  const width = to.x - from.x;

  return (
    <Container style={{ height, top: from.y }}>
      <svg
        width="163"
        height="100"
        viewBox="0 0 163 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="-2"
          x2="52"
          y2="-2"
          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 159 100)"
          stroke="white"
          stroke-width="4"
        />
        <line
          y1="-2"
          x2="52"
          y2="-2"
          transform="matrix(0 -1 -1 0 0 52)"
          stroke="white"
          stroke-width="4"
        />
        <line
          y1="-2"
          x2="163"
          y2="-2"
          transform="matrix(1 0 0 -1 0 48)"
          stroke="white"
          stroke-width="4"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  background: red;
  left: 0;
  right: 0;
`;
