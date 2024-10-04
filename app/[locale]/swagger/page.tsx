import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerDocs = () => {
  return (
    <SwaggerUI url="/api/swagger" />
  );
};

export default SwaggerDocs;
