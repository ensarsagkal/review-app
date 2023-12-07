import Review from "./components/Review"
import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="title">
        <h2>Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </main>
  )
}

export default App
