import { LayoutGroup, motion } from "framer-motion";
import styled from "styled-components";
import { KeyBox } from "./KeyBox";

type Props = {
  list: { a: number; b: number; id: number }[];
  onKeySelection: (id: number) => void;
  active?: number;
  addNewKey: (a: number, b: number) => void;
  removeKey: (id: number) => void;
  onKeyChange: (a: number, b: number, id: number) => void;
};

export const KeyList = (p: Props) => {
  return (
    <Container>
      {p.list.map((keys) => (
        <KeyBox
          a={keys.a}
          b={keys.b}
          id={keys.id}
          active={p.active === keys.id}
          onKeySelection={p.onKeySelection}
          onClose={() => p.removeKey(keys.id)}
          onKeyChange={(a, b) => p.onKeyChange(a, b, keys.id)}
          key={keys.id}
        />
      ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
`;
