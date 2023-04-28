import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      {/* <AllTheBooks/> */}
      <BookList/>
      <MyFooter/>
    </div>
  );
}
export default App;
