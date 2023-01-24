import logo from './logo.svg';
import './App.css';
import Navi from './NaviBar/Navi';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className='App_child'>
      <Header
      img="https://i.pinimg.com/originals/90/bc/0c/90bc0c906fc30587b4863d0e6089f364.jpg "
      name="grocery"
      />
      <Header
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLp0ID5tdwljelI7t1Az1qoCoNCLhsy6JTA&usqp=CAU "
      name="Mobiles"
      />
      <Header
      img="https://www.loveyourclothes.org.uk/sites/default/files/styles/responsive/public/lyc-campaigns-website-header-1600.jpg?itok=SWO-SNae "
      name="Fashion"
      />
      <Header
      img=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXS8o0l-Lg5V4wf5l2xkGHo1H_Z80sQUORw&usqp=CAU"
      name="Electronics"
      />
      <Header
      img="https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      name="Gadgets"
      />
    </div>
    <Content/>
    </div>
  );
}

export default App;
