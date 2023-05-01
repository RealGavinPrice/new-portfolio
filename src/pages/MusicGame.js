
import * as Tone from 'tone';


function createLeftPaddleOscillator(paddleY) {
    const oscillator = new Tone.Oscillator({
      frequency: paddleY * 2,
      type: 'sine',
    }).toDestination();
    oscillator.start();
    return oscillator;
  }


  function createSynthOnBallPosition(ballX) {
    const synth = new Tone.Synth({
      oscillator: {
        type: 'sawtooth',
        frequency: ballX * 10,
      },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 1,
      },
    }).toDestination();
    synth.triggerAttackRelease('C4', '8n');
    return synth;
  }

  function createRightPaddleFilter(paddleY) {
    const filter = new Tone.Filter({
      type: 'lowpass',
      frequency: paddleY * 10,
      rolloff: -12,
    }).toDestination();
    return filter;
  }

  function Game() {
    const [leftPaddleY, setLeftPaddleY] = useState(50);
    const [rightPaddleY, setRightPaddleY] = useState(50);
    const [ballX, setBallX] = useState(50);
    const [ballY, setBallY] = useState(50);
    const [ballSpeedX, setBallSpeedX] = useState(1);
    const [ballSpeedY, setBallSpeedY] = useState(1);
    const [oscillators, setOscillators] = useState([]);
    const [synths, setSynths] = useState([]);
  
    useEffect(() => {
      const leftPaddleOscillator = createLeftPaddleOscillator(leftPaddleY);
      const rightPaddleFilter = createRightPaddleFilter(rightPaddleY);
      setOscillators([leftPaddleOscillator]);
      setFilters([rightPaddleFilter]);
      return () => {
        leftPaddleOscillator.dispose();
        rightPaddleFilter.dispose();
      };
    }, [leftPaddleY, rightPaddleY]);
  
    useEffect(() => {
      const synth = createSynthOnBallPosition(ballX);
      setSynths([synth]);
      return () => {
        synth.dispose();
      };
    }, [ballX]);
  
    function movePaddles() {
      setLeftPaddleY(prevY => prevY + 1);
      setRightPaddleY(prevY => prevY - 1);
      oscillators.forEach(oscillator => {
        oscillator.frequency.value = leftPaddleY * 2;
      });
      filters.forEach(filter => {
        filter.frequency.value = rightPaddleY * 10;
      });
    }
  
    function moveBall() {
      setBallX(prevX => prevX + ballSpeedX);
      setBallY(prevY => prevY + ballSpeedY);
      if (ballX >= 100 || ballX <= 0) {
        setBallSpeedX(prevSpeedX => -prevSpeedX);
      }
      if (ballY >= 100 || ballY <= 0) {
        setBallSpeedY(prevSpeedY => -prevSpeedY);
      }
      synths.forEach(synth => {
        synth.set({
          'oscillator.frequency': ballX * 10,
        });
      });
    }
  
    return (
      <div>
        <canvas
          width="400"
          height="400"
          ref={canvasRef}
        />
      </div>
    );
  }