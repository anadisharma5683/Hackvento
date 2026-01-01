type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-jungleTeal text-mintCream px-4 py-2 rounded-lg hover:bg-mutedTeal transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
