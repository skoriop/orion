exports.handler = async function (event, context) {
  const value = process.env.REACT_APP_SOME_SECRET;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
  };  
};