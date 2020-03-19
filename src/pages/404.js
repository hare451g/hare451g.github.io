import React from 'react';
import SEO from '../containers/SEO';

function NotFoundPage() {
  return (
    <div>
      <SEO title="404" />
      <h1>Are you lost?</h1>
      <p>Page that you requested is doesn't exists . . .</p>
    </div>
  );
}

export default NotFoundPage;
