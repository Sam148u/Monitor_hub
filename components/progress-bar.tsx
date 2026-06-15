type ProgressBarProps = {
  value: number;
  label?: string;
};

export function ProgressBar({ value, label = "Progreso" }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div aria-label={label} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-zinc-300">{label}</span>
        <span className="font-mono text-blue-400">{safeValue}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
