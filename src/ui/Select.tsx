import styled from "styled-components";

import { FilerOption } from "./Filter";

interface StyledSelectProbs {
  type?: string;
}

const StyledSelect = styled.select<StyledSelectProbs>`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
interface SelectProbs extends StyledSelectProbs {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: FilerOption[];
  value: string;
}
function Select({ options, value, onChange, ...props }: SelectProbs) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
