import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import MyCarousel from '../carousel';

import kompetensi from '../../../static/slides/kompetensi.png';
import depok from '../../../static/slides/2.jpg';
import inixindo from '../../../static/slides/inixindo.png';
import magang from '../../../static/slides/magang.jpg';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <br />

      <MyCarousel
        title={'Achievement'}
        images={[
          {
            // title: 'Juara 2 Se-Kota Depok',
            desc: '',
            publicURL: kompetensi,
          },
          {
            // title: 'Juara 2 Se-Kota Depok',
            desc: '',
            publicURL: depok,
          },
          {
            // title: 'Workshop Web App Security',
            desc: '',
            publicURL: inixindo,
          },
          {
            // title: 'Sertifikat Magang',
            desc: '',
            publicURL: magang,
          },
        ]}
      />

      <br />
      <h2 className="title">Get In Touch</h2>

      <p>
        {/* Although I’m not currently looking for any new opportunities, my inbox is always open. */}
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
