import logo from './logo.svg';
import './App.css';
// import WelcomeDesc from './ex01_containment/WelcomeDesc';
// import WelcomeDialog from './ex01_containment/WelcomeDialog';

// import SplitPane from './ex02_containment/SplitPane';
// import WelcomeDesc from './ex02_containment/WelcomeDesc';
// import WelcomeDialog from './ex02_containment/WelcomeDialog';

import AlramDialog from './ex03_specialization/AlramDialog';
import WelcomeDialog from './ex03_specialization/WelcomeDialog';

function App() {
  return (

    // <div>
    //   <WelcomeDesc />
    //   <WelcomeDialog />
    // </div>

    // <SplitPane npx={7} color="gray"
    //           left={<WelcomeDesc npx={3} color="red" />}
    //           right={<WelcomeDialog npx={3} color="blue" />} />

    <div>
      <AlramDialog />
      <WelcomeDialog />
    </div>

  );
}

export default App;