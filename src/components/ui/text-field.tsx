type TextFieldProps = {
  id: string;
  label: string;
  hint?: string;
  type?: "text" | "email" | "tel";
  name?: string;
  disabled?: boolean;
  autoComplete?: string;
};

export function TextField({
  id,
  label,
  hint,
  type = "text",
  name,
  disabled = false,
  autoComplete,
}: TextFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-describedby={hintId}
        className="min-h-11 rounded-md border border-leaf bg-white px-3 text-ink disabled:cursor-not-allowed disabled:bg-sage/60"
      />
      {hint ? (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
