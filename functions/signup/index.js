export async function onRequestPost(context) {

  const body = await context.request.json();
  const email = body.email;

  await fetch("https://app.loops.so/api/v1/contacts", {
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

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
