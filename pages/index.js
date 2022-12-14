import Head from 'next/head'
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Technology from './Technology';
import Footer from './components/Footer';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Blogs from './Blogs';
import Projects from './Pro';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';

export default function Home({ blogs, profile, skills, technology, programming, development, others, experience, project, typingtext,  }) {

 
  

  return (
    <>
      <Head>
        <title>Harshal Kahar | Portfolio</title>
        <meta name="description" content="I'm Harshal Kahar an enthusiastic and passionate Full Stack Web developer from L.D. college of engineering Ahmedabad.having a special interest in Frontend technologies and experience of building Web applications & Websites with Modern JavaScript, React.js & Next.js with modern UI like Tailwind CSS " />
        <link rel="icon" href="/logo.ico" />

      </Head>
      <main>
        <Header></Header>
        <MobileHeader></MobileHeader>
        <Hero profile={profile} typingtext={typingtext}></Hero>
        <About profile={profile}></About>
        <Skills skills={skills} technology={technology} development={development} programming={programming} others={others}></Skills>
        <Experience experience={experience}></Experience>
        <Projects project={project}></Projects>
        <Blogs blogs={blogs}></Blogs>
        <Contact></Contact>
        <Technology></Technology>
        <Footer></Footer>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const skillsQuery = `*[_type == "skills"][0]`;
  const skills = await client.fetch(skillsQuery);

  const Technologyquery = `*[_type == "technology"]`;
  const technology = await client.fetch(Technologyquery);

  const Programmingquery = `*[_type == "programming"]`;
  const programming = await client.fetch(Programmingquery);

  const Developmentquery = `*[_type == "development"]`;
  const development = await client.fetch(Developmentquery);

  const Others = `*[_type == "others"]`;
  const others = await client.fetch(Others);

  const Experiencequery = `*[_type == "experience"]`;
  const experience = await client.fetch(Experiencequery);

  const Projectquery = `*[_type == "project"]`;
  const project = await client.fetch(Projectquery);

  const typingquery = `*[_type == "typingtext"]`;
  const typingtext = await client.fetch(typingquery);

  
  return {
    props: {
      blogs, profile, skills, technology, programming, development, others, experience, project, typingtext

    }
  }
}



