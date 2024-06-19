import { Layout } from "components/layout";
import { Landing } from "./components/landing";
// import { SignupLogin } from "./components/signup-login";

const App = () => (
  <Layout>
    <main className="h-[calc(100vh-84px)]">
      <Landing />
      {/* <SignupLogin /> */}
    </main>
  </Layout>
);

export default App;
