import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import './scss/App.scss';

const App = () => {

  // get project path from url (via react router)
  const { projectPath } = useParams();
  console.log(`App: ${projectPath}`);

  return (
    <>
    <Header detail={projectPath} />

    {/* tell the main element if a project is active */}
    <main>

      {/* renders project, about me, etc. */}
      {/* context only if the URL has a :projectPath */}
      <Outlet context={projectPath} />

    </main>
    </>
  )
}

export default App;
