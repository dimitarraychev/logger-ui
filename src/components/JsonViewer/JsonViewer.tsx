import ReactJson from "react-json-view";
import "./JsonViewer.css";

interface JsonViewerProps {
  jsonData: unknown;
  title: string;
}

const tryParse = (data: unknown) => {
  if (typeof data !== "string") return data;

  try {
    return JSON.parse(data);
  } catch {
    try {
      const decoded = decodeURIComponent(data);

      if (decoded.includes("=")) {
        const params = new URLSearchParams(decoded);
        const payload = params.get("payload_jsonrpc");
        if (payload) {
          return JSON.parse(payload);
        }
      }

      return JSON.parse(decoded);
    } catch {
      return { raw: data };
    }
  }
};

const JsonViewer = ({ jsonData, title }: JsonViewerProps) => {
  const parsedJson = tryParse(jsonData);

  return (
    <div className="json-view-wrapper">
      <label className="json-title">{title}</label>
      <ReactJson
        src={parsedJson as object}
        theme="summerfruit"
        style={{ backgroundColor: "#0d1421", fontSize: "14px" }}
        enableClipboard={true}
        displayDataTypes={false}
        displayObjectSize={false}
      />
    </div>
  );
};

export default JsonViewer;
