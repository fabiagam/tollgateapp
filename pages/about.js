import Layout from '../components/layouts/AppLayout';
import About from '../components/Aboutpage';
import { NextSeo } from 'next-seo';

const Index = () => {
    return (
     <Layout>
      <NextSeo
          title="About tollgate portal"
          description="About toll collection portal"/>
         <About/>
      </Layout> 
    );
  }
  export default Index;