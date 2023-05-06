import { useState } from "react";
import styled from "styled-components";
import { Key } from "../types/keys";

type Props = {
  addKey: (key: Key) => void;
};

export const AddKey = (p: Props) => {
  const [value, setValue] = useState("");
  const handleAdd = () => {
    const [a, b, ...c] = value.split(":");
    console.log({ a, b, c });
    if (!a || !b || c.length) return;
    const an = parseInt(a);
    const bn = parseInt(b);
    p.addKey({ a: an, b: bn, id: Math.floor(Math.random() * 10000) });
    setValue("");
  };
  return (
    <Container>
      <h3>Add Key</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="a:b"
      />
      <button onClick={handleAdd}>Add</button>
    </Container>
  );
};

const Container = styled.div`
  > button {
    flex: 1;
    border-radius: 5px;
    color: white;
    background-color: ${({ theme }) => theme.colors.ft};
    border: 1px ${({ theme }) => theme.colors.l1} solid;
    font-size: 20px;
    outline: none;
    padding: 10px;
    min-width: 0;
    margin-left: 10px;
  }

  input {
    flex: 1;
    border-radius: 5px;
    color: white;
    background-color: ${({ theme }) => theme.colors.ft};
    border: 1px ${({ theme }) => theme.colors.l1} solid;
    font-size: 20px;
    outline: none;
    padding: 10px;
    min-width: 0;
  }
`;
