import { Layout } from "antd";
import NavBar from "./components/ui/NavBar";
import MainContent from "./components/ui/MainContent";


const App = () => {
  return (
    <>
    <Layout>
      <NavBar />
      <MainContent />
    </Layout>
    </>
  );
}
 
export default App;