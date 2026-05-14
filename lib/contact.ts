export type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
};

export type Inquiry = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export type StoredInquiry = Inquiry & {
  id: string;
  submittedAt: string;
  source: "website";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiry(payload: InquiryPayload | null): 
  | { ok: true; data: Inquiry }
  | { ok: false; error: string; fields: Record<string, string> } {
  if (!payload || typeof payload !== "object") {
    return {
      ok: false,
      error: "Invalid request body.",
      fields: { form: "Please submit the form again." }
    };
  }

  const data: Inquiry = {
    name: asString(payload.name),
    email: asString(payload.email).toLowerCase(),
    company: asString(payload.company),
    service: asString(payload.service) || "General growth project",
    budget: asString(payload.budget) || "Not specified",
    message: asString(payload.message)
  };

  const fields: Record<string, string> = {};

  if (data.name.length < 2) fields.name = "Please add your name.";
  if (!emailPattern.test(data.email)) fields.email = "Please use a valid email address.";
  if (data.company.length < 2) fields.company = "Please add your company or brand name.";
  if (data.message.length < 10) fields.message = "Tell us a little more about the project.";

  if (Object.keys(fields).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fields
    };
  }

  return { ok: true, data };
}
