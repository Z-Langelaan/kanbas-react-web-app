import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a, b) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };


  const [welcomeMessage, setWelcomeMessage] = useState("Message before server");

  const fetchWelcomeMessage = async () => {
    // const promise = axios.get("http://localhost:4000/a5/welcome");
    // promise
    //   .then((response) => {
    //     setWelcomeMessage(response.data);
    //   })
    //   .error(() => {});
    try {
      const response = await axios.get("http://localhost:4000/a5/welcome");
      setWelcomeMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWelcomeMessage();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Welcome</h4>
      {welcomeMessage && <h5>{welcomeMessage}</h5>}
      <h4>Calculator</h4>
      <input
        className="form-control"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <h3>Query Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>

      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>

      <input value={result}
        className="form-control mb-2" type="number" readOnly
      />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100" >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100" >
        Fetch Substraction of {a} - {b}
      </button>

      
    </div>
  );
}
export default EncodingParametersInURLs;