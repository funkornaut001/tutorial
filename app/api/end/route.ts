import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
    //grab data, parse it, and based on what button they chose on the last "frame" send them somewhere
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "totalScore";
  } else if (buttonId === 2) {
    path = "postScore";
  } else if (buttonId === 3) {
    path = "shareScore";
  } else {
    path = "";
  }
  const headers = new Headers();
    headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
    //with frames it won't allow you to redirect to a external url so redirect users within your app
  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
    {
      headers: headers,
      status: 302,
    },
  );
  return response;
}

export const dynamic = "force-dynamic";