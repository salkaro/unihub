import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const { email, password } = JSON.parse(bodyText || "{}");

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email or password not configured" },
        { status: 500 }
      );
    }

    const API_BASE_URL = process.env.API_BASE_URL;
    if (!API_BASE_URL) {
      return NextResponse.json(
        { error: "API_BASE_URL not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Backend API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Login failed", details: errorData, status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Create response with the data
    const nextResponse = NextResponse.json(data);

    return nextResponse;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
