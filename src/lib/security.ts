/**
 * Security utilities for input sanitization and rate limiting.
 */

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

const HTML_ESCAPE_REGEX = /[&<>"'/]/g;

/**
 * Escapes HTML special characters to prevent XSS when rendering user input.
 */
export function escapeHtml(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(HTML_ESCAPE_REGEX, (char) => HTML_ESCAPE_MAP[char] || char);
}

/**
 * Strips HTML tags from a string as an additional layer of defense.
 */
export function stripTags(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "");
}

/**
 * Sanitizes user input by stripping tags and escaping HTML entities.
 */
export function sanitizeInput(str: string): string {
  return escapeHtml(stripTags(str.trim()));
}

/**
 * Validates that a string doesn't exceed max length and contains no suspicious patterns.
 */
export function validateTextInput(
  value: string,
  maxLength: number = 200
): { valid: boolean; error?: string } {
  if (value.length > maxLength) {
    return { valid: false, error: `Máximo de ${maxLength} caracteres permitidos.` };
  }

  // Block script injection patterns
  const suspiciousPatterns = /(<script|javascript:|on\w+\s*=|eval\(|document\.|window\.)/i;
  if (suspiciousPatterns.test(value)) {
    return { valid: false, error: "Entrada contém caracteres não permitidos." };
  }

  return { valid: true };
}

/**
 * Validates email format.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

/**
 * Generic error message that doesn't reveal system internals.
 */
export const GENERIC_AUTH_ERROR = "Credenciais inválidas. Verifique seus dados e tente novamente.";
