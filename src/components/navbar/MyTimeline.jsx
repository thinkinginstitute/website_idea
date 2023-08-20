import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BasicCard from './BasicCard';
export default function MyTimeline() {
  const content = [
    'I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then ultimately moving to the United Kingdom with my mother and brother in 2003. At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) - this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.',
    'I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then ultimately moving to the United Kingdom with my mother and brother in 2003. At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) - this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.',
    'I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then ultimately moving to the United Kingdom with my mother and brother in 2003. At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) - this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.',
    'I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then ultimately moving to the United Kingdom with my mother and brother in 2003. At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) - this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.',
  ];
  return (
    <Timeline position='alternate-reverse'>
      {content.map((c) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <BasicCard
              content={
                'I was born in Pakistan in 1994, moving to Lesotho for a while, before going back to Pakistan. Then ultimately moving to the United Kingdom with my mother and brother in 2003. At 12, I learned to code and started earning money as a freelance web designer (this funded my World of Warcraft addiction) - this was my first taste of earning money online. I went to school in Southend-on-Sea, where I also worked as a teaching assistant for a couple of years.'
              }
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
