import Header from "./components/Header";
import Layout from "./components/Layout";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;