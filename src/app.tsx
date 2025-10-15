import UpsellPage from "./components/UpsellPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upsell" element={<UpsellPage />} />
    </Routes>
  );
}
