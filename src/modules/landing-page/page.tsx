import { Layout } from "components/layout";
import { Landing } from "./components/landing";
import { SignupLogin } from "./components/signup-login";

const App = () => (
  <Layout>
    <main>
      <Landing />
      <SignupLogin />
    </main>
  </Layout>
);

export default App;
