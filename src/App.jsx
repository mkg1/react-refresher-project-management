import { useState } from "react";
import SideBar from "./components/SideBar";
 import NewProject from "./components/NewProject";
 import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: []
  })

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
        projects: [...prevProjects.projects, newProject]
      }
    })
  }

  let content;
  if (projects.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartProject={handleStartProject}/>
      {content}
    </main>
  );
}

export default App;
