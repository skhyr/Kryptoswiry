import { useEffect, useState } from "react";
import styled from "styled-components";
import { Key } from "../types/keys";
import { alphabet, createPairs } from "../utils/alphabet";
import { crack, crack2 } from "../utils/crack";
import { filterText } from "../utils/text";

type Props = {
  addKey: (key: Key) => void;
  type: "modulon" | "modulon2";
};

export const Crack = (p: Props) => {
  const [pValue, setPValue] = useState("");
  const [sValue, setSValue] = useState("");
  const [generatedKeys, setGeneratedKeys] = useState<Key[]>([]);

  const calc1 = () => {
    if (pValue.length < 2) return;
    const arg = pValue
      .split("")
      .map((_, i) => [pValue[i], sValue[i]] as [string, string]);
    setGeneratedKeys(crack(arg));
  };

  const calc2 = () => {
    if (pValue.length < 4) return;
    const pPairs = createPairs(pValue.split(""));
    const sPairs = createPairs(sValue.split(""));
    const arg = pPairs.map(
      (_, i) => [pPairs[i], sPairs[i]] as [[string, string], [string, string]]
    );
    setGeneratedKeys(crack2(arg));
  };

  useEffect(() => {
    if (pValue.length !== sValue.length) return setGeneratedKeys([]);
    p.type === "modulon" ? calc1() : calc2();
  }, [pValue, sValue]);

  return (
    <Container>
      <h3>Crack</h3>
      <Inputs>
        <input
          value={pValue}
          onChange={(e) => setPValue(filterText(e.target.value))}
        />
        <span>{"->"}</span>
        <input
          value={sValue}
          onChange={(e) => setSValue(filterText(e.target.value))}
        />
      </Inputs>
      <Outputs>
        {generatedKeys.map((key) => (
          <div key={key.id}>
            <div>
              {key.a}:{key.b}
            </div>
            <div onClick={() => p.addKey(key)}>Add</div>
          </div>
        ))}
      </Outputs>
    </Container>
  );
};

const Container = styled.div``;

const Outputs = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
`;

const Inputs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  > span {
    font-size: 20px;
    font-weight: 700;
  }

  > input {
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
