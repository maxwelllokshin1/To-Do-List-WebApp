interface Props {
  name: string;
  status?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ name, status = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-${status} d-flex flex-wrap justify-content-center`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
