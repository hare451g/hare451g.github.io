import React from 'react';
import moment from 'moment';
import formats from '../../constants/formats';

function WorkExperienceItem({ img, companyName, role, start, end, isPresent }) {
  return (
    <div>
      <img src={img} alt={companyName} />
      <div>
        <span>{role}</span>
        <span>{companyName}</span>
        <div>
          {moment(start).format(formats.WORK_EXPERIENCE_DATE)} -{' '}
          {isPresent
            ? 'Present'
            : moment(end).format(formats.WORK_EXPERIENCE_DATE)}
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceItem;
