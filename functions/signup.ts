export const onRequest = async (context) => {

  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await context.request.json();
  const email = body.email;

  if (!email) {
    return new Response("Email required", { status: 400 });
  }

  await fetch("https://app.loops.so/api/v1/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_LOOPS_API_KEY"
    },
    body: JSON.stringify({
      email: email,
      subscribed: true
    })
  });

  return new Response(
    JSON.stringify({ success: true }),
    { headers: { "Content-Type": "application/json" } }
  );

};
