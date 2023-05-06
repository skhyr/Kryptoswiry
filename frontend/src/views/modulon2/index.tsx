import styled from "styled-components";
import { Sidebar } from "../../components/Sidebar";
import { SidePanel } from "../../components/SidePanel";
import { Solver2 } from "../../components/Solver2";
import { useKeyList } from "../../hooks/useKeyList";

type Props = {
  screen: string;
  changeScreen: (screen: string) => void;
};

export const ModuloN2 = (p: Props) => {
  const usedKeyList = useKeyList();
  return (
    <Container>
      <Sidebar {...p} />
      <Solver2 usedKeyList={usedKeyList} />
      <SidePanel
        addKey={({ a, b }) => usedKeyList.addKey(a, b)}
        type="modulon2"
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
