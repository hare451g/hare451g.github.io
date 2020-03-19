import React from 'react';

import SEO from '../containers/SEO';
import HomeLayout from '../layouts/HomeLayout';

function IndexPage() {
  return (
    <HomeLayout>
      <SEO title={'About'} />
      <article style={{ marginTop: '2rem' }}>
        Hello{' '}
        <span role="img" aria-label="wave">
          👋
        </span>
        <p>My name is Hendra Sadewa, and I love software engineering.</p>
        <h3>It all started from a movie and little bit of imagination</h3>
        <p>
          {' '}
          My engineering journey starts when I was a high school, I watched{' '}
          <a href="https://www.imdb.com/title/tt0113243/">
            Hackers (1995)
          </a>{' '}
          movie, and I fall in love with how the hero could use computer to
          manipulate traffic lights to escape from the pursuer, COOL! I felt
          like I should learn 'hacking' too, it's a pretty useful skill for my
          future.
        </p>
        <h3>[Hello World] and First sin</h3>
        <p>
          With my{' '}
          <a href="https://www.cnet.com/products/hp-mini-110/specs/">
            HP Mini 110
          </a>{' '}
          and ubuntu Lucid Lynx and I learn how to write my Hello World with C
          and gcc. I don't understand what I did at first but I really belived
          that I know how to 'hack' things with a computer (well our high school
          delusion did a bad thing here).
        </p>
        <p>
          Then I started to learn how to 'cheat' in facebook online games "Wild
          Ones", with using cheat engine and analyzed where should I manipulate
          the value to enchance my charactes and it works! (Sorry, devs).
        </p>
        <p>
          After graduated from high school I decided to learn computer sciences
          and fortunately I got some scholarship from Universitas Gunadarma, and
          I choose IT major in there.
        </p>
        <h3>Change of Heart</h3>
        <p>
          It was Second year of my college, and I did nothing but, learning ->
          playing games -> practice code. And then my friends told me about IT
          Laboratory is opening positions for Assistant. I was ignoring it at
          first because I did not have any interest to teaching others or
          talking in front of people.
        </p>
        <p>
          Honestly, I was an Introvert, I have hard time to talk with someone
          else. Even I can't maintain eye contact while talking with others.
          But, there's something in my heart told me to join IT Laboratory as an
          Assistant. Also I need money too :).
        </p>
        <p>
          So I joined, and worked with them for 2 years and 6 months, and I
          really happy working with my teamate, and I have learned a lot of soft
          skills, like how to talking with others, how to teach others, how to
          talk in the front of people. I really glad that I could be part of
          them.
        </p>
        <h3>Working!!</h3>
        <p>
          Now I'm working fulltime at{' '}
          <a href="https://hara.ag">Hara Technology</a> as a Front-end engineer,
          and I do other stuffs like teaching, and consulting too.
        </p>
      </article>
    </HomeLayout>
  );
}

export default IndexPage;
