import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-bottom: 1rem;
`;

const ImageWrapper = styled.img`
  width: 64px;
  height: 64px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 1rem;
`;

const RoleName = styled.div`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.monospace};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.85rem;
`;

const CompanyName = styled.div`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};

  line-height: 1.85rem;
`;

const PeriodLabel = styled.div`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.85rem;
`;

export {
  Wrapper,
  TextWrapper,
  ImageWrapper,
  CompanyName,
  RoleName,
  PeriodLabel,
};
