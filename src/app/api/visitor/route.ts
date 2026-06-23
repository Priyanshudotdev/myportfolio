import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.counterapi.dev/v1/Priyanshudotdev/portfolio/up",
      {
        cache: "no-store",
      },
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
