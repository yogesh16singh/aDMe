import React from "react";
import ImageGallery from "./Components/ImageGallery";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ImageGallery />
      </main>
     
    </div>
  );
}

export default App;
