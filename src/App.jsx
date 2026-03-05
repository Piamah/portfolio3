import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(135deg,var(--bg-start),var(--bg-end))]">
      <div className="flex-1 w-full">
        <>
          <Home />
        </>
      </div>
      <Footer />
    </div>
  );
}


export default App;
