import React, { Children } from 'react';
import './Typography.css';

const Typography = ({ type, children, className }) => {
  switch (type) {
    case "text": {
      return <p className={' typography-text ' + className}>{children}</p>;
    }
    case "title": {
      return (
        <span className={' typography-title ' + className}>{children}</span>
      );
    }
  }
};

export default Typography
