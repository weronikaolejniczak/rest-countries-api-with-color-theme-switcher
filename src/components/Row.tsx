import styled from 'styled-components';

const Label = styled.span`
  font-weight: ${({ theme: { weights } }) => weights.bold};
`;

type RowPropsType = {
  label: string;
  value: string;
};

export const Row = ({ label, value }: RowPropsType) => (
  <p>
    <Label>{label}:</Label> {value}
  </p>
);
