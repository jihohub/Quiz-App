import React, { useState } from "react";
import Styled from "./ChoiceBox.styles";

interface ChoiceProps {
  choice: number | string;
}

const ChoiceBox: React.FC<ChoiceProps> = ({ choice }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const onPress = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setSelected(!selected);
  };

  return (
    <Styled.ChoiceBox onClick={onPress} isSelected={selected}>
      <p>{choice}</p>
    </Styled.ChoiceBox>
  );
};

export default ChoiceBox;
// module.exports = ChoiceBox;
