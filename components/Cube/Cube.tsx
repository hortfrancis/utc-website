import Container from './Container';
import Face from './Face';
import './Cube.css';

export default function Cube() {

  return (
    <Container>
      <div className='scene'>
        <div className='cube'>
          <Face position='front' />
          <Face position='back' />
          <Face position='left' />
          <Face position='right' />
          <Face position='top' />
          <Face position='bottom' />
        </div>
      </div>
    </Container>
  );
}
