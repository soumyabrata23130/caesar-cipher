import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(0);
  const [output, setOutput] = useState("");

  const encrypt = () => {
    let sh = Number(shift);
    let out = "";
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char >= "A" && char <= "Z") {
        let n = ((((char.charCodeAt(0) - 65 + sh) % 26) + 26) % 26) + 65;
        out += String.fromCharCode(n);
      } else if (char >= "a" && char <= "z") {
        let n = ((((char.charCodeAt(0) - 97 + sh) % 26) + 26) % 26) + 97;
        out += String.fromCharCode(n);
      } else {
        out += char;
      }
    }
    setOutput(out);
  };

  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="font-bold my-3 text-3xl">Caesar Cipher</h1>
      <div className="card p-4 rounded-lg" id="caesar-card">
        <div className="flex flex-col flex-wrap justify-center">
          <input
            className="my-1 px-1 rounded-md"
            type="text"
            id="input"
            name="input"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <input
            className="my-1 px-1 rounded-md"
            type="number"
            id="shift"
            name="shift"
            placeholder="Shift letters"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-around my-1">
          <button
            className="px-3 py-1 rounded-lg"
            type="submit"
            id="encrypt"
            onClick={encrypt}
          >
            Encrypt
          </button>
          <button className="px-3 py-1 rounded-lg" type="reset" id="clear">
            Clear
          </button>
        </div>
        <hr className="my-1" />
        <p id="output">{output}</p>
      </div>
    </main>
  );
}
