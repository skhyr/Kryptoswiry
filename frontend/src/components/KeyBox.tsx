import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import closeIcon from "../assets/close.png";

type Props = {
  a: number;
  b: number;
  id: number;
  active?: boolean;
  onKeySelection: (index: number) => void;
  onKeyChange: (a: number, b: number) => void;
  onClose: () => void;
};

export const KeyBox = (p: Props) => {
  const self = useRef<HTMLDivElement>(null);
  const handleClose = (e: any) => {
    e.preventDefault();
    p.onClose();
  };

  return (
    <Container
      ref={self}
      onClick={() => p.onKeySelection(p.id)}
      active={p.active}
    >
      {`${p.a}:${p.b}`}
      <Icon src={closeIcon} onClick={handleClose} />
    </Container>
  );
};

const Container = styled(motion.div)<{ active?: boolean }>`
  display: flex;
  justify-items: space-around;
  background-color: ${({ theme }) => theme.colors.ft};
  padding: 20px;
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.colors.l1} solid;
  display: grid;
  place-items: center;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: ${(p) => (p.active ? "0 0 5px white" : "none")};
  position: relative;
`;

const Icon = styled.img`
  height: 10px;
  width: 10px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  opacity: 0.4;
`;
