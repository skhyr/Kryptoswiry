import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useKeyList } from "../hooks/useKeyList";
import { useModuloN2Alg } from "../hooks/useModuloN2Alg";
import { filterText } from "../utils/text";
import { KeyList } from "./KeyList";
import { TextBox } from "./TextBox";

type Props = {
  usedKeyList: ReturnType<typeof useKeyList>;
};

export const Solver2 = (p: Props) => {
  const [input, setInput] = useState("CENTRALNIEKAMIENIEMGOBEZKITU");
  const [hovered, setHovered] = useState<number>();
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { keyList, selectedKey, selectKey, addKey, removeKey, changeKey } =
    p.usedKeyList;
  const layers = useModuloN2Alg(input, selectedKey);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
      setHovered(undefined);
    }
  }, [editMode]);

  return (
    <Container>
      {editMode && (
        <TextArea
          ref={inputRef}
          value={input}
          rows={3}
          onChange={(e) => setInput(filterText(e.target.value))}
          onBlur={() => setEditMode(false)}
        />
      )}
      {!editMode && (
        <TextBox
          onClick={() => setEditMode(true)}
          hovered={hovered}
          onHover={setHovered}
          text={layers[0]}
        />
      )}
      <TextBox hovered={hovered} onHover={setHovered} text={layers[1]} />
      <KeyList
        list={keyList}
        onKeySelection={selectKey}
        addNewKey={addKey}
        removeKey={removeKey}
        onKeyChange={changeKey}
        active={selectedKey?.id}
      />
      <TextBox hovered={hovered} onHover={setHovered} text={layers[2]} />
      <TextBox
        hovered={hovered}
        onHover={setHovered}
        text={layers[3]}
        showCopyButton
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 50px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 60vw;
  position: relative;
`;

const TextArea = styled.textarea`
  color: white;
  background-color: ${({ theme }) => theme.colors.ft};
  font-family: inherit;
  letter-spacing: 5px;
  border: 1px ${({ theme }) => theme.colors.l1} solid;
  font-size: 20px;
  border: none;
  resize: none;
  padding: 20px;
  outline: none;
`;
