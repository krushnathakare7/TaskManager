
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import TaskTable from "./TaskTable";


export const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8082/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  const handleMarkAsDone = async (taskId) => {
    try {
      await axios.patch(`http://localhost:8082/tasks/${taskId}`, {
        status: "DONE",
      });
      const response = await axios.get("http://localhost:8082/tasks");
      console.log("response after done", response.data);
      setTasks(response.data);
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDelete = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:8082/tasks/${taskId}`);
        const response = await axios.get("http://localhost:8082/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Error deleting task:", err);
      }
    }
  };

  return (
    <div>
      {tasks.length ? (
        <TaskTable
          tasks={tasks}
          onMarkAsDone={handleMarkAsDone}
          onDelete={handleDelete}
        />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            No tasks found!
          </Typography>
        </Box>
      )}
       <button
        //onClick={handleAddClick}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
      >
        Add Task
      </button>
    </div>
  );
};