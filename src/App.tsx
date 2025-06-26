import FormControl from "./components/FormControl";
import Card from "./components/Card";
import Button from "./components/Button";
import Scrollspy from "./components/Scrollspy";
import Alert from "./components/Alert";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  status: "secondary" | "success";
  label: "Active" | "Complete";
};

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [task, setTask] = useState<Task[]>([]); // List of task titles
  const [filter, setFilter] = useState<"Active" | "Complete" | null>();

  const isFirstLoad = useRef(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleFormSubmit = (value: string) => {
    if (value.trim() !== "") {
      const newTask: Task = {
        id: uuidv4(),
        title: value,
        status: "secondary",
        label: "Active",
      };
      setTask((prev) => [...prev, newTask]); // Add new task to list
    }
  };

  const handleDismiss = (idToRemove: string) => {
    setTask((prev) => prev.filter((task) => task.id !== idToRemove));
  };

  const markComplete = (id: string) => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: "success", label: "Complete" } : t
      )
    );
  };

  const clearAllTasks = () => {
    setTask([]);
  };

  // Sort active tasks on top
  const sortedTasks = [...task].sort((a, b) => {
    if (a.label === "Active" && b.label === "Complete") return -1;
    if (a.label === "Complete" && b.label === "Active") return 1;
    return 0;
  });

  const filteredTasks =
    filter === "Active" || filter === "Complete"
      ? sortedTasks.filter((t) => t.label === filter)
      : sortedTasks;

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Are you sure you want to delete all tasks?
          <Button
            name="Delete All"
            status="danger"
            onClick={() => {
              clearAllTasks(), setAlertVisible(false);
            }}
          />
        </Alert>
      )}
      <Scrollspy
        onFilterChange={(value) => {
          if (value === "active" || value === "complete") {
            setFilter(
              (value.charAt(0).toUpperCase() + value.slice(1)) as
                | "Active"
                | "Complete"
            );
          } else {
            setFilter(null);
          }
        }}
      />
      <Button
        name="Delete All"
        status="danger"
        onClick={() => setAlertVisible(true)}
      />
      <FormControl
        name="Input new task"
        align="center"
        onSubmit={handleFormSubmit}
      />

      {/* One card per task */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        {filteredTasks.map((task) => (
          <Card
            key={task.id}
            task={task.title}
            status={task.status}
            label={task.label}
            onClick={() => markComplete(task.id)}
            onClose={() => handleDismiss(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
