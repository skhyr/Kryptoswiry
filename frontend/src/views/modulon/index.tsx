import styled from "styled-components";
import { Sidebar } from "../../components/Sidebar";
import { SidePanel } from "../../components/SidePanel";
import { Solver } from "../../components/Solver";
import { useKeyList } from "../../hooks/useKeyList";

type Props = {
  screen: string;
  changeScreen: (screen: string) => void;
};

export const ModuloN = (p: Props) => {
  const usedKeyList = useKeyList();
  return (
    <Container>
      <Sidebar {...p} />
      <Solver usedKeyList={usedKeyList} />
      <SidePanel
        addKey={({ a, b }) => usedKeyList.addKey(a, b)}
        type="modulon"
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: stretch;
  gap: 50px;
  color: white;
`;
