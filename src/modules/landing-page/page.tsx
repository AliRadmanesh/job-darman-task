import { Layout } from "components/layout";
import { Landing } from "./components/landing";
import { SignupLogin } from "./components/signup-login";
import { ContactUs } from "./components/contact-us";
import { Pricing } from "./components/pricing";

const App = () => (
  <Layout>
    <main>
      <Landing />
      <SignupLogin />
      <ContactUs />
      <Pricing />
    </main>
  </Layout>
);

export default App;
