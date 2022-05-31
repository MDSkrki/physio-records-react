export const apiConsumer = async (method, uri, body) => {
  const options = {
    method,
  };
  if (method === "POST") {
    options.body = JSON.stringify(body);
    options.headers = {
      "Content-Type": "application/json",
    };
  }
  try {
    const res = await fetch(process.env.REACT_APP_BASE_API_URL + uri, options);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
