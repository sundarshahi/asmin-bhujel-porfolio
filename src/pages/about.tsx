import React, { useState } from 'react';
import styled from 'styled-components';

import { getTextColor } from 'Templates/Layout';
import SEO from 'Molecules/Seo';
import Job from 'Molecules/Job';
import Button from 'Atoms/Button';
import Container from 'Atoms/Container';
import Filter from 'Atoms/Filter';

import useToggle from 'Hooks/useToggle';

import { jobs } from 'Data/jobs';
import { skills } from 'Data/skills';

const About = () => {
  const { toggle: toggleJobs, value: showJobs } = useToggle(false);
  const [filter, setFilter] = useState<string>('');

  const truncatedJobs = jobs.slice(0, 2);
  const displayJobs = showJobs ? jobs : truncatedJobs;

  const skillCategories = Object.keys(skills);
  return (
    <>
      <SEO title="About" />
      <Container>
        <Section>
          <Name data-testid="headline">Hey, I'm Asmin Bhujel</Name>
          <JobTitle>A Security Analyst from Nepal</JobTitle>
          <Text>
            I'm currently working as a SIOC Analyst under IBM Security where I
            perform the following activity:
            <List>
              <li>
                Analyzing the offenses triggered in SIEM (QRadar) tool and
                classify whether it as a potential threat or not.
              </li>
              <li>
                Analyzing the captured payloads of Checkpoints Firewall, NIPS,
                Endpoint, Proxy & other more than 10 CJ's.
              </li>
              <li>
                If a potential threat is observed collect the evidence and
                findings.
              </li>
              <li>
                Logged the Incident and delegate the mitigating solutions to the
                support team using the Resilient IR tool.
              </li>
            </List>
          </Text>
          <Text>I'm deeply focused on learning and improving my skills.</Text>
        </Section>
        <Section>
          <Title>Skills</Title>
          <WithSidebar>
            <main>
              <ScreenOnly>
                <div data-testid="filters">
                  Filter:
                  {skillCategories.map((skill) => (
                    <Filter
                      key={skill}
                      name={skill}
                      setFilter={setFilter}
                      currentFilter={filter}
                    />
                  ))}
                </div>
              </ScreenOnly>
              {skillCategories.map((category) => {
                const cat = skills[category];
                if (filter !== '' && filter !== category) return;
                return cat.map((ability: string, index: number) => (
                  <Badge
                    key={`${category}-${index + 1}`}
                    className={`--${category}`}
                  >
                    {ability}
                  </Badge>
                ));
              })}
              <h2>Soft skills</h2>
              {/* {softSkills.join(", ")} */}
              {[
                'Strong communication',
                'Leadership',
                'Problem solving',
                'Creative thinking',
                'Flexible and adaptive',
                'Team player',
                'Always on time',
              ].map((item, index) => (
                <Badge key={`softskill-${index + 1}`} className="--softskill">
                  {item}
                </Badge>
              ))}
            </main>
            <aside>
              <h2>Languages</h2>
              <ul>
                <li>🇳🇵 Nepali (native)</li>
                <li>🇺🇸 English (fluent)</li>
                <li>🇮🇳 Hindi (fluent)</li>
              </ul>
            </aside>
          </WithSidebar>
        </Section>
        <Section>
          <Title>Work Experience</Title>
          <Jobs id={`jobs-${showJobs ? 'open' : 'closed'}`}>
            {displayJobs.map((job) => (
              <Job
                key={job.id}
                title={job.title}
                company={job.company}
                place={job.place}
                from={job.from}
                to={job.to}
              >
                <List>
                  {job.tasks.map((task, index) => (
                    <li key={`task-${index}`}>{task}</li>
                  ))}
                </List>
              </Job>
            ))}
          </Jobs>
          <ReadMore onClick={() => toggleJobs()}>
            {!showJobs ? 'Show more' : 'Show less'}
          </ReadMore>
        </Section>
        <Section>
          <Centre>
            <Text>
              Recruiters, you can find my up-to-date CV as a PDF download by
              clicking the button below.
            </Text>
            <Button
              href="/docs/cv-asmin_bhujel-2020.pdf"
              download="asmin_bhujel-cv.pdf"
            >
              Download CV
            </Button>
          </Centre>
        </Section>
      </Container>
    </>
  );
};

export default About;

const Section = styled.section`
  margin: 2rem 0;

  @media print {
    border-bottom: 1pt solid #000;
    line-height: 1;
  }
`;

const WithSidebar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  main {
    width: 70%;
    min-width: 280px;
    flex-grow: 1;
  }

  aside {
    width: 30%;
    min-width: 280px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
      }
    }

    h2:first-of-type {
      margin: 0 0.5rem 1rem 0;
      display: inline-block;
      font-size: 1em;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border-radius: 99px;
  background: #333;
  color: #fff;

  &.--technologies {
    background: #3e4153;
  }
  &.--frameworks {
    background: #1671cf;
  }
  &.--databases {
    background: #64cf16;
  }
  &.--cms {
    background: #e94e1b;
  }
  &.--design {
    background: #d03333;
  }

  @media print {
    background: transparent;
    color: #000;
    border: 1px solid #000;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`;
const JobTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;

  @media print {
    font-size: 16pt;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;

  @media print {
    margin-top: 5pt;
    font-size: 11pt;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;

  @media print {
    font-size: 22pt;
  }
`;

const Jobs = styled.div`
  @media print {
    column-count: 2;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;
`;

// const PrintOnly = styled.div`
//   display: none;
//   @media print {
//     display: unset;
//   }
// `;

const ScreenOnly = styled.div`
  @media print {
    display: none;
  }
`;

const ReadMore = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  color: ${getTextColor};

  @media print {
    display: none;
  }
`;

const Centre = styled.div`
  text-align: center;
`;
