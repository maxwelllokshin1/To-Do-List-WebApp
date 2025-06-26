import { useRef } from "react";

interface Props {
  name: string;
  align?: "left" | "center";
  onSubmit?: (value: string) => void;
}

const FormControl = ({ name, align = "left", onSubmit }: Props) => {
  //   const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value || "";
    if (onSubmit) {
      onSubmit(value);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className={"d-flex justify-content-" + align}>
        <form className="form-floating mb-3" onSubmit={handleSubmit}>
          <input
            className="form-control"
            id="floatingInput"
            placeholder={name}
            ref={inputRef}
          ></input>
          <label htmlFor="floatingInput">{name}</label>
        </form>
      </div>
    </>
  );
};

export default FormControl;
