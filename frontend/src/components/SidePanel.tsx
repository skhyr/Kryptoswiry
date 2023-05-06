import styled from "styled-components";
import { Key } from "../types/keys";
import { AddKey } from "./AddKey";
import { Crack } from "./Crack";

type Props = {
  addKey: (key: Key) => void;
  type: "modulon" | "modulon2";
};

export const SidePanel = (p: Props) => {
  return (
    <Container>
      <AddKey addKey={p.addKey} />
      <Crack addKey={p.addKey} type={p.type} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 25px;
  gap: 50px;
`;
