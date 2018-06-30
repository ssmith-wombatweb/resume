import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {
  H2, H3, H4, P,
} from './textElements';

const UnstyledEduCard = ({
  className,
  heading,
  program,
  dates,
  description,
}) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <H3>
      {program}
    </H3>
    {dates.map(date => (
      <H4 key={`${heading}${date}`}>
        {date}
      </H4>
    ))}
    {description
      ? (
        <P>
          {description}
        </P>
      )
      : null}
  </section>
);

UnstyledEduCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
};

UnstyledEduCard.defaultProps = {
  description: null,
};

const EduCard = Styled(UnstyledEduCard)`
`;

export default EduCard;
