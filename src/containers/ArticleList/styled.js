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
  line-height: 0.75rem;
  text-decoration: none;
  color: #3d3d3d;
`;

const PostTitle = styled.div`
  padding: 0.5rem 0;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 0.9375rem;
  color: #3d3d3d;
`;

export { PostWrapper, PostTimestamp, PostTitle };
