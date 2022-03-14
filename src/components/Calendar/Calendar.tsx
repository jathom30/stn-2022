import { FlexBox } from 'component-library';
import React from 'react';
import './Calendar.scss'

export const Calendar = () => (
  <div className="Calendar">
    <FlexBox flexDirection='column' gap="1rem">
      <iframe title="calendar" src="https://feed.mikle.com/widget/v2/84035/" height="402px" width="100%" className="fw-iframe" scrolling="no" frameBorder="0"></iframe>
      <div className="Calendar__links">
        <p>
          Check back often as our calendar is updated regularly or check out the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/embed?src=smalltimenapoleonband%40gmail.com&ctz=America%2FNew_York">
            full calendar here
          </a>.
        </p>
      </div>
    </FlexBox>
  </div>
)