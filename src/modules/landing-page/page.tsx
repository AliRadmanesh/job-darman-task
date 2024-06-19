import { Layout } from "components/layout";
import { Landing } from "./components/landing";
import { SignupLogin } from "./components/signup-login";
import { ContactUs } from "./components/contact-us";

const App = () => (
  <Layout>
    <main>
      <Landing />
      <SignupLogin />
      <ContactUs />
    </main>
  </Layout>
);

export default App;
