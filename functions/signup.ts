export const onRequest = async (context) => {

  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await context.request.json();
  const email = body.email;

  const res = await fetch("https://app.loops.so/api/v1/contacts", {
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

  const text = await res.text();

  return new Response(JSON.stringify({
    loops_status: res.status,
    loops_response: text
  }), {
    headers: { "Content-Type": "application/json" }
  });

};
