import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    const host = req.headers.get("host") || req.headers.get("x-forwarded-host") || "localhost:3000";
    const protocol = req.headers.get("x-forwarded-proto") || "https";
    const onboardingUrl = `${protocol}://${host}/vendor-onboarding`;

    console.log(`[Vendor Interest] Email captured: ${email} | Onboarding URL: ${onboardingUrl}`);

    return NextResponse.json({ 
      success: true, 
      message: "Onboarding link sent successfully." 
    });
  } catch (error) {
    console.error("[Vendor Interest] Error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
