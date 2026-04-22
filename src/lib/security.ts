/**
 * Security utilities for sanitization, validation and safe transport.
 */

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
};

const HTML_ESCAPE_REGEX = /[&<>"']/g;
const CONTROL_CHARS_REGEX = /[\u0000-\u001F\u007F]+/g;

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
 * Sanitizes text for safe display in HTML contexts.
 */
export function sanitizeInput(str: string): string {
  return escapeHtml(stripTags(str.trim()));
}

/**
 * Sanitizes text that will be sent through URLs or external services without HTML escaping.
 */
export function sanitizeTextForTransport(str: string): string {
  if (typeof str !== "string") return "";
  return stripTags(str)
    .replace(CONTROL_CHARS_REGEX, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Validates that a string doesn't exceed max length and contains no suspicious patterns.
 */
export function validateTextInput(
  value: string,
  maxLength: number = 200
): { valid: boolean; error?: string } {
  const normalizedValue = sanitizeTextForTransport(value);

  if (!normalizedValue) {
    return { valid: false, error: "Preencha este campo antes de continuar." };
  }

  if (normalizedValue.length > maxLength) {
    return { valid: false, error: `Máximo de ${maxLength} caracteres permitidos.` };
  }

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
  const normalizedEmail = sanitizeTextForTransport(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(normalizedEmail) && normalizedEmail.length <= 255;
}

/**
 * Generic error message that doesn't reveal system internals.
 */
export const GENERIC_AUTH_ERROR = "Credenciais inválidas. Verifique seus dados e tente novamente.";
