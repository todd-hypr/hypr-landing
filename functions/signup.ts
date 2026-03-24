export async function onRequestPost(context: any) {
  try {
    const { email } = await context.request.json();

    if (!email) {
      return new Response("Missing email", { status: 400 });
    }

    const LOOPS_API_KEY = "61cb1ef84df5e8e145e30521d1e7f706";

    const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOOPS_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const result = await response.text();

    return new Response(result, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400
    });
  }
}
