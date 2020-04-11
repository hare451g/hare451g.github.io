import styled from 'styled-components';
import { COLOR_CHARCOAL } from '../../constants/colors';

const IdentityCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;
`;

const AuthorThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthorDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.75rem;
`;

const AuthorName = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const AuthorIntro = styled.div`
  font-family: 'Open Sans';
  padding: 2px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text};
`;

export {
  IdentityCardWrapper,
  AuthorThumbnailWrapper,
  AuthorDescriptionWrapper,
  AuthorName,
  AuthorIntro,
};
