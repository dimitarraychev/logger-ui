import ReactJson from "react-json-view";
import "./JsonViewer.css";

interface JsonViewerProps {
  jsonData: {} | string;
  title: string;
}

const JsonViewer = ({ jsonData, title }: JsonViewerProps) => {
  const parsedJson =
    typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

  return (
    <div className="json-view-wrapper">
      <label className="json-title">{title}</label>
      <ReactJson
        src={parsedJson}
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
