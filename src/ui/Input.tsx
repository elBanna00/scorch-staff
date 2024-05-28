import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input<InputProps>`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export default Input;
