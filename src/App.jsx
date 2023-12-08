import { useState } from "react";
import SideBar from "./components/SideBar";
 import NewProject from "./components/NewProject";
 import NoProjectSelected from "./components/NoProjectSelected";
 import SelectedProject from "./components/SelectedProject";
function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjects(prevState => {
      const taskId = Math.random();
      const newTask = {text: text, id: taskId, projectId: prevState.selectedProjectId}
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }
  function handleDeleteTask(id) {
    setProjects((prevState) => { return {
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })

  }

  function handleStartProject() {
    setProjects((prevProjects) => { return {
      ...prevProjects,
      selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjects(prevProjects => {
      const newProject = {...projectData, id: Math.random()}
      return {
        ...prevProjects,
        selectedProjectId: undefined,
        projects: [...prevProjects.projects, newProject]
      }
    })
  }

  function handleCancel() {
    setProjects((prevProjects) => { return {
      ...prevProjects,
      selectedProjectId: undefined
      }
    })
  }

  function handleSelectProject(id) {
    setProjects((prevProjects) => { return {
      ...prevProjects,
      selectedProjectId: id
      }
    })
  }

  function handleDelete() {
    setProjects((prevProjects) => { return {
      ...prevProjects,
      selectedProjectId: undefined,
      projects: prevProjects.projects.filter((project) => project.id !== prevProjects.selectedProjectId)
      }
    })
  }

  const selectedProject = projects.projects.find((project) => project.id === projects.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projects.tasks}/>
  if (projects.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartProject={handleStartProject} projects={projects.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
