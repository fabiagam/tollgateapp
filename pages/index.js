import Layout from '../components/layouts/AppLayout';
import Homepage from '../components/Homepage';
import { NextSeo } from 'next-seo';

const Index = () => {
    return (
     <Layout>
      <NextSeo
          title="Demo tollgate web app"
          description="Demo web app for toll collection and car parking users."/>
         <Homepage/>
      </Layout> 
    );
  }
  export default Index;