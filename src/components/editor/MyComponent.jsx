// Other file (where you use List)
import Navbar from "../NavBar.jsx";
import List from "./List.jsx"; // Assuming List.jsx is in the same directory

function MyComponent() {
  // ...

  return (
    <div>
        <Navbar/>
      {/* Other components */}
      <List />
    </div>
  );
}
export default MyComponent;