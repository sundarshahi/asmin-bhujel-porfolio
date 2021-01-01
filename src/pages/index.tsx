import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { Link } from 'gatsby';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

const IndexPage = () => {
  const params = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#303346',
      },
      shape: {
        type: ['polygon', 'image', 'circle'],
        image: [
          {
            src:
              'https://images.vexels.com/media/users/3/150001/isolated/preview/5121287011a3ea3057f4ba2990835879-security-video-camera-illustration-by-vexels.png',
            height: 40,
            width: 40,
          },
          {
            src:
              'https://p1.hiclipart.com/preview/109/598/427/red-circle-web-application-firewall-computer-security-application-security-computer-network-computer-software-network-security-orange-png-clipart.jpg',
            height: 40,
            width: 40,
          },
        ],
        stroke: {
          width: 0,
          color: 'rgba(255,255,255,0.1)',
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: {
          enable: true,
          speed: 0.15984015984015984,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 51.29459670609772,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 40,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: '#ffffff',
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `security analyst`,
          `computer engineer`,
          `ibm`,
          `chandigarh university`,
          `pen tester`,
          `developer`,
          `nepal`,
        ]}
      />
      <Background params={params} />
      <Intro>
        <Container>
          <Headline>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Asmin</span> Bhujel.",
                "I'm a <span class='accent'>security analyst</span>.",
                "I'm a <span class='accent'>Computer science engineer</span>.",
                "I'm a <span class='accent'>creative</span> mind.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
          </Headline>
          <Text>
            As a security analyst with years of experience I analyze the
            offenses triggered in SIEM (QRadar), captured payloads of
            Checkpoints Firewall, NIPS, Endpoint, Proxy & other more than 10
            CJ's .{' '}
            <strong>
              <Link to="/contact/">Get in touch</Link>
            </strong>{' '}
            to discuss how we can work together.
          </Text>
        </Container>
      </Intro>
    </>
  );
};

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;

  .accent {
    color: #e94e1b;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0.5rem 0;
`;

export default IndexPage;
