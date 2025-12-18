import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

export default function QRGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="title">QR Code Generator</h1>

        <input
          className="input"
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="qr-box">
          {text ? (
            <QRCodeCanvas value={text} size={180} />
          ) : (
            <span className="placeholder">QR will appear here</span>
          )}
        </div>

        <div className="footer">Fully responsive • Made By A.Aleem</div>
      </div>
    </div>
  );
}
