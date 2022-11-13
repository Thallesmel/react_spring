import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Slide from '../../components/Slide/Slide';

function Home() {
  return (
    <div className='Home'>
      <div className='container'>
        <Navbar />
      </div>
      <div className='first-intro'>
        <Slide />
      </div>
    </div>
  );
}

export default Home;
