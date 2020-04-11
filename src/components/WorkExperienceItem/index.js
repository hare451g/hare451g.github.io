import React from 'react';
import moment from 'moment';
import formats from '../../constants/formats';
import {
  TextWrapper,
  Wrapper,
  ImageWrapper,
  CompanyName,
  RoleName,
  PeriodLabel,
} from './styled';

function WorkExperienceItem({ img, companyName, role, start, end, isPresent }) {
  return (
    <Wrapper>
      <ImageWrapper src={img} alt={companyName} />
      <TextWrapper>
        <RoleName>{role}</RoleName>
        <CompanyName>{companyName}</CompanyName>
        <PeriodLabel>
          {moment(start).format(formats.WORK_EXPERIENCE_DATE)} -{' '}
          {isPresent
            ? 'Present'
            : moment(end).format(formats.WORK_EXPERIENCE_DATE)}
        </PeriodLabel>
      </TextWrapper>
    </Wrapper>
  );
}

export default WorkExperienceItem;
