import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import "./App.css";

export default function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  const handleExit = async () => {
    await invoke("exit_app")
  }

  // async function handleExit() {
  //   await invoke("exit_app")
  // }

  const handleFileSelect = async () => {
    const filePath = await open({
      multiple: false, // allow only one file
      filters: [
        {
          name: "Text Files",
          extensions: ["txt", "md", "json"]
        },
      ],
    });

    if (filePath) {
      setSelectedFile(filePath as string);
    }
  };

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
      <div className="func_buttons">
        <button className="exit_button" onClick={handleExit}>Exit</button>
        <button onClick={handleFileSelect}>Select File</button>
      </div>
      {selectedFile && <p>Selected File: {selectedFile}</p>}
    </main>
  );
}
