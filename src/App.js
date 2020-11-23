import "./App.css";

import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {requests.map((request, index) => (
        <Row
          title={request.title}
          fetchUrl={request.fetchUrl}
          isLargeRow={index === 0}
        />
      ))}
    </div>
  );
}

export default App;
