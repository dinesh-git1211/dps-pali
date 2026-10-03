import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, studentName, grade, phone, email, message } = body;

    // Basic validation
    if (!parentName || !studentName || !grade || !phone || !email) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwlteccgnZfvcrq1jUNdw014diFaI0YtSKego7pgIhptDO8xRAx1r-TzMGm3f8mbH9t/exec";

    // Forward payload to Google Apps Script
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentName,
        studentName,
        grade,
        phone,
        email,
        message: message || "",
      }),
    });

    const result = await response.json().catch(() => ({ result: "success" }));

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error("Admissions submission error:", err);
    return NextResponse.json(
      { error: "Failed to submit admission inquiry. Please try again." },
      { status: 500 }
    );
  }
}
