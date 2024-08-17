import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from "@tanstack/react-query";

function App() {
  const [count, setCount] = useState(0)
  const baseUrl = import.meta.env.VITE_SERVER_ENDPOINT ? import.meta.env.VITE_SERVER_ENDPOINT : 'http://localhost:3333'

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/users`);
      return res.json();
    },
    refetchInterval: 1000,
  });
  
  function renderUsers() { 
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return data.map((user) => {
      return (
        <li key={user._id}>id: {user._id} / name: {user.name}</li>
      )
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <ul>
          {renderUsers()}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
