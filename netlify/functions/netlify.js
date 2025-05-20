exports.handler = async function(event, context) {
  // For debugging
  console.log("Event", event);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Netlify Functions are working!"
    })
  };
};
