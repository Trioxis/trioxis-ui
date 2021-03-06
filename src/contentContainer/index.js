import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'recompose';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
  },
};

function _ContentContainer (props) {
  const {
    classes,
    className,
    children,
    sheet,
    ...remainingProps
  } = props;

  return (
    <div {...remainingProps} className={classNames(classes.container, className)}>
      {children}
    </div>
  );
};

export const ContentContainer = compose(
  injectSheet(styles),
)(_ContentContainer);
