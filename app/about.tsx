import moment from "moment";
import React from "react";

const About: React.FC = () => {
  const birthdate = moment("2001-01-05", "YYYY-MM-DD");
  const today = moment();
  const ageInYears = today.diff(birthdate, "years");
  return (
    <main className="about">
      <section>
        <h1>I am Nikola, the developer of this website!</h1>
        <p>
          Hi, my name is Nikola, I am {ageInYears} years old, and I live in the
          north part of Belgrade, Zemun. In 2019. I enrolled at the Faculty of
          Organizational Sciences, majoring in Operational Management,
          department of Management and Organization. I am occupied with IT
          development, management and organization, and training. In the future,
          I want to combine IT and management through one job like Project
          Manager or IT Manager. My motto is{" "}
          <i>Keep focus, embrace your vulnerabilities, and work hard</i>. I am
          always seeking for more knowledge, experience, and skills, beacuse I
          think that the key tool for success is constant effort, and
          determination. Any person with average or little below intelligence
          can achieve whatever he wants only if he is ready to dedicate himself
          to it to the maximum.
        </p>
      </section>
      <section>
        <h1>Education</h1>
        <p>
          Education means studying in order to obtain a deeper knowledge and
          understanding of a variety of subjects to be applied to daily life.
          Education is not limited to just knowledge from books, but can also be
          obtained through practical experiences outside of the classroom. There
          are two types of education, formal and informal. Formal education:
          Certificate of finished sports high school with an average GPA of 4.8.
          In 2019, enrolled at the Faculty of Organizational Sciences majoring
          in Management and Organization. Informal education is the wise,
          respectful and spontaneous process of cultivating learning. It works
          through conversation, and the exploration and enlargement of
          experience. Informal education is more important than formal,
          therefore, I am trying to keep focus on this type of education. There
          are too many hours that I spend on side hustling like programming,
          books, unobligatory projects, etc. In October of 2020 I joined the
          computer science student association FONIS.
        </p>
      </section>
      <section>
        <h1>Sport</h1>
        <p>
          As an 8-year-old kid, I trained basketball for 3 months in the
          basketball club <i>Mecina</i> in Kraljevo. When my family and I moved
          to Belgrade I started training rowing at rowing club <i>Partizan</i>.
          I trained rowing for 6 years and competed at numerous domestic and
          international races in which I won around 40 medals. My greatest
          achievements in rowing are: 6x international champion, 4x
          vice-champion 4x state champion, 2x state vice-champion 2x competitor
          at the <i>Balkan rowing championship</i> 2x indoor rowing champion
          Rowing has had a big part in forming my personality, especially
          teaching me how to be disciplined in every possible situation. Rowing
          is a cruel and ruthless sport that does not forgive any mistakes. I
          quitted rowing in 2019, because I realized I had to devote more time
          learning math for the entrance exam. In my opinion, education will
          always be more valuable than sport. The day after I quit rowing, I
          went to a nearby gym named
          <i>Muscle factory gym</i>
          and I have been training actively ever since. In my gym training I try
          to combine multiple different sports such as bodybuilding,
          powerlifting, calisthenics, CrossFit, running and boxing.
        </p>
      </section>
      <section>
        <h1>Mindset</h1>
        <p>
          Mindset is the most important part of the personality and that is a
          place where the difference is made between people. The best mindsets
          are created in terrible situations, for example, poverty, loss of a
          close member of the family, huge disappointment, etc. Point is that we
          cannot have healthy and righteous mindsets if we haven&apos;t passed
          some bad situations in life. A famous quote will best describe this:
          <i>What doesn&apos;t kill you makes you stronger</i> and I will add{" "}
          <i>and makes you better</i>. In the previous 4 years, I have changed
          my personality a lot. Credits go to my family, best friend Marko,s and
          to the books. Believe it or not books had a huge impact on my
          personality, especially book written by Mark Manson named
          <i>Subtle art of not giving a fuck</i>. Lessons that I learned from
          that book and life are: Always give your best to improve your
          personality. Don&apos;t give a fuck about stupid things, only for
          important things such as family. Listen to the advice that important
          people are saying. Honesty is the most important part of every
          relationship. Don&apos;t do things to someone else that you Don&apos;t
          want others to do to you . Don&apos;t try to be someone else, just be
          the best version of yourself. One little decision can have a huge
          impact on your life (<i>the Butterfly effect</i>). It is normal to be
          hated by people if you are more successfull in every aspect of life.
          Don&apos;t let emotions control your behavior, always listen to your
          mind and be patient when deciding. The book enlightened me completely
          and gave me a base for the process of mental change. Three years after
          reading that book I became completely different person.
        </p>
      </section>
      <section>
        <h1>Hobbies</h1>
        <p>
          I have a wide range of interests, therefore, I have a lot of hobbies.
          I&apos;m always trying to organize my free time for activities that
          will mostly improve mind as well as my body. These activities are:
          Programming (Java, Python) Gym and Street workout Fighting sports
          (Box, MMA) Listening music Reading books (especially psychological,
          self-improvement and astrophysics) Basketball, swimming, running,
          tennis, etc. Web development (HTML, CSS, JS)
        </p>
      </section>
      <section>
        <h1>Working experience</h1>
        <p>
          I started working as an 18-year-old teenager when I joined the youth
          working club. In a short period, I worked for a many companies and
          learned a lot about a warehouse, construction, and relocation work.
          Meanwhile, I learned a lot about programming, web design, and fitness.
          Here is a list of my working experience: Warehouse jobs in companies:{" "}
          <i>Milsped</i>, <i>Delta transport systems</i>, <i>Gebruder Weiss</i>,{" "}
          <i>Nelt</i>,<i>Forbel</i>, and <i>Union sped</i>. Construction jobs in
          companies: <i>MKM Global Building</i> where I worked on the
          reconstruction of an office from the CEO of <i>NIS</i> company.{" "}
          <i>WD Concord West</i> where I worked as a manual worker on a
          government project of hospital construction. Relocation jobs for a
          numerous companies which I work from time to time. Construction of
          personal website using HTML5, CSS3 (Bootstrap), JS (Vanila, and Node),
          and Netlify platform.
        </p>
      </section>
    </main>
  );
};
export default About;
