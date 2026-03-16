export const onRequest = async (context) => {

  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await context.request.json();
  const email = body.email;

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 61cb1ef84df5e8e145e30521d1e7f706"
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
