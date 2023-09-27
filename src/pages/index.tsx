import styled from "@emotion/styled";
import { getCount } from "@/store/global/selectors";
import { setCount } from "@/store/global/actions";
import { useDispatch, useSelector } from "@/store/hooks";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const onClickButton = (type: "+" | "-") => {
    switch (type) {
      case "+": {
        dispatch(setCount(count + 1));
        break;
      }
      case "-": {
        dispatch(setCount(count - 1));
      }
    }
  };

  return (
    <>
      <StyledText>{count}</StyledText>
      <StyledButton onClick={() => onClickButton("+")}>+</StyledButton>
      <StyledButton onClick={() => onClickButton("-")}>-</StyledButton>
    </>
  );
}

const StyledText = styled.p`
  font-size: 30px;
`;

const StyledButton = styled.button``;
