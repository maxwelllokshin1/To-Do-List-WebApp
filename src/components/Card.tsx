import { useState } from "react";

interface Props {
  task: string;
  status: "secondary" | "success";
  label: "Active" | "Complete";
  onClose: () => void;
  onClick: () => void;
}

const Card = ({ task, status, label, onClose, onClick }: Props) => {
  //   const [status, setStatus] = useState<"secondary" | "success">("secondary");
  //   const [label, setLabel] = useState<"Active" | "Complete">("Active");

  //   const onClick = (newStatus: typeof status, newLabel: typeof label) => {
  //     setStatus(newStatus);
  //     setLabel(newLabel);
  //   };

  return (
    <>
      <div
        className={`card text-bg-${status} mb-3`}
        style={{
          width: "18rem",
          cursor: "pointer",
          transition: "opacity 1.0s ease",
        }}
        onClick={onClick}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>{label}</div>
          <button
            type="button"
            className="btn-close btn-close-hover-opacity"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{task}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
