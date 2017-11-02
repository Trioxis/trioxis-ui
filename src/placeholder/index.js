import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import classNames from 'classnames';

const styles = {
  '@keyframes placeHolderShimmer': {
    '0%': {backgroundColor: '#dddddd'},
    '35%': {backgroundColor: '#dddddd'},
    '50%': {backgroundColor: '#eeeeee'},
    '65%': {backgroundColor: '#dddddd'},
    '100%': {backgroundColor: '#dddddd'},
  },
  shimmer: {
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationName: 'placeHolderShimmer',
    animationTimingFunction: 'linear',
    color: 'rgba(0,0,0,0)',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};

function _Placeholder (props) {
  const {
    classes,
    className,
    style,
    children,
  } = props;

  return (
    <div className={classNames(className, classes.shimmer)}
         style={style}
    >
      {children}
    </div>
  );
};

export const Placeholder = compose(
  injectSheet(styles),
)(_Placeholder);