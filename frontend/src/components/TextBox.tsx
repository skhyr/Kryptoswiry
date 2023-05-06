import styled from "styled-components";
import copyIcon from "../assets/copy.png";
import checkIcon from "../assets/check.png";
import { useState } from "react";

type Props = {
  text: string[];
  hovered?: number;
  onHover?: (i?: number) => void;
  onClick?: () => void;
  showCopyButton?: boolean;
};

export const TextBox = (p: Props) => {
  const [coppied, setCoppied] = useState(false);

  const handleCopy = async () => {
    const text = p.text.join("");
    await navigator.clipboard.writeText(text);
    setCoppied(true);
    setTimeout(() => setCoppied(false), 2000);
  };
  return (
    <Box onClick={p.onClick}>
      {p.text.map((el, i) => (
        <Char
          highlight={i === p.hovered}
          onMouseOver={() => p.onHover?.(i)}
          onMouseOut={() => p.onHover?.(undefined)}
        >
          {el}
        </Char>
      ))}
      {p.showCopyButton && (
        <>
          <Icon src={checkIcon} show={coppied} />
          <Icon src={copyIcon} onClick={handleCopy} show={!coppied} />
        </>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.ft};
  padding: 20px;
  font-size: 20px;
  min-height: 109px;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px ${({ theme }) => theme.colors.l1} solid;
  position: relative;
  white-space: no-wrap;
`;

const Icon = styled.img<{ show: boolean }>`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  opacity: ${({ show }) => (show ? 0.4 : 0)};
  transform: scale(${({ show }) => (show ? 1 : 0)});
  transition: all 0.2s;
`;

const Char = styled.span<{ highlight?: boolean }>`
  background-color: ${(p) => (p.highlight ? "magenta" : "transparent")};
  white-space: no-wrap;
  margin: 0 2px;
  cursor: pointer;
`;
