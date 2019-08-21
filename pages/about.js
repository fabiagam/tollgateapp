import Layout from '../components/layouts/AppLayout';
import Aboutpage from '../components/Aboutpage';
import { NextSeo } from 'next-seo';

const About = () => {
    return (
     <Layout>
      <NextSeo
          title="About tollgate portal"
          description="About toll collection portal"/>
         <Aboutpage/>
      </Layout> 
    );
  }
  export default About;