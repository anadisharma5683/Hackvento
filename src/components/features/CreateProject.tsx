"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { createProject } from "@/lib/projects";

export function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    if (!title || !description) return;

    await createProject(
      title,
      description,
      ["AI", "ML"], // demo skills
      "demo-teacher-id"
    );

    setTitle("");
    setDescription("");
    alert("Project created");
  }

  return (
    <div className="bg-azureMist p-4 rounded-xl max-w-md">
      <h3 className="font-semibold mb-3">Create Research Project</h3>

      <input
        value={title}
        placeholder="Project title"
        className="w-full p-2 mb-2 rounded border"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={description}
        placeholder="Description"
        className="w-full p-2 mb-3 rounded border"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={handleSubmit}>Post Project</Button>
    </div>
  );
}
