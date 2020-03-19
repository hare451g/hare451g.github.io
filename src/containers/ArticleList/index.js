import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function ArticleList({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

ArticleList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticleList;
