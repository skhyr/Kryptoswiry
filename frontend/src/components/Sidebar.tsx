import styled from "styled-components";

type Props = {
  screen: string;
  changeScreen: (screen: string) => void;
};
export const Sidebar = (p: Props) => (
  <Container>
    <Link
      active={p.screen === "modulon"}
      onClick={() => p.changeScreen("modulon")}
    >
      n
    </Link>
    <Link
      active={p.screen === "modulon2"}
      onClick={() => p.changeScreen("modulon2")}
    >
      n2
    </Link>
  </Container>
);

const Link = styled.div<{ active: boolean }>`
  font-weight: 700;
  opacity: 0.8;
  font-size: 20px;
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.ft};
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;

  @media screen and (max-width: 500px) {
    width: 100vw;
    height: auto;
    flex-direction: row;
    padding-top: 0;
    padding: 20px;
    justify-content: space-evenly;
  }
`;
