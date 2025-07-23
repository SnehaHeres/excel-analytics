import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert("Uploading: ${file.name}");
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-3xl font-semibold text-green-700 mb-6">
         Upload Excel File
      </h2>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        className="mb-4 block text-sm text-gray-700
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-green-100 file:text-green-700
          hover:file:bg-green-200"
      />

      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Upload
      </button>
    </div>
  );
}

export default Upload;