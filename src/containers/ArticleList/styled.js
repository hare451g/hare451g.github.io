import styled from 'styled-components';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const PostTimestamp = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 0.85rem;
  text-decoration: none;
  color: #3d3d3d;
`;

const PostTitle = styled.div`
  padding: 0.2rem 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 800;
  font-size: 1.75rem;
  color: #3d3d3d;
`;

export { PostWrapper, PostTimestamp, PostTitle };
