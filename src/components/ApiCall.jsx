import React from "react";
import axios from "axios";

function ApiCall() {
  let cancelToken;

  const onType = async (e) => {
    const search = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Cancelling the previous req");
    }

    cancelToken = axios.CancelToken.source();

    const result = await axios.get(`apu-url/courses?q=${search}`, {
      cancelToken: cancelToken.token,
    });

    console.table(result.data);
  };

  return (
    <div style={{ marginTop: "4em", textAlign: "center" }}>
      <input type="text" placeholder="enter search" onChange={onType} />
    </div>
  );
}

export default ApiCall;
