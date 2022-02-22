import React from "react";
import ImagePixelate from "imagePixelate";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <ImagePixelate />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
