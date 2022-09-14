import React from "react";

function DisplayError(props) {
  const errorMsg = 'error occured';

  return (
    <div>
      <h3>{errorMsg}</h3>
    </div>
  );
}

export default DisplayError;
