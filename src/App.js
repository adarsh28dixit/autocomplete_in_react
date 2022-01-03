
import './App.css';
import AutoComplete from './autoComplete';
function App() {
  return (
    <div className="App">
      <h2>Autocomplete task</h2>
      <AutoComplete suggestions={[
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ]}
      />
    </div>
  );
}

export default App;
