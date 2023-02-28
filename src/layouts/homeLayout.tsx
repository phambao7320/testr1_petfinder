import { Header, Footer, Filter } from "../components";

const HomeLayout = ({ children }: any) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default HomeLayout;
