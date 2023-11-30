import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";

import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import { LoadingScreen } from "./components/Loading";



function App() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
  useEffect(() => {

    setMenuOpened(false);
  }, [section]);
 
  return (
    <>
    <LoadingScreen  started={started} setStarted={setStarted}/>
      {isSmallScreen ? (
        <div className="small-screen-message">
          <p>This is a 3D experience , that is better lived on a laptop screen , for a better experience please open this link with your laptop.</p>
        </div>
      ) : (
        <>

          <MotionConfig
            transition={{
              ...framerMotionConfig,
            }}
          >
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
              <ScrollControls pages={4} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Scroll>
                  <Experience section={section} menuOpened={menuOpened} />
                </Scroll>
                <Scroll html>
                  <Interface setSection={setSection} />
                </Scroll>
              </ScrollControls>
            </Canvas>
            <Menu
              onSectionChange={setSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
            <Leva hidden />
          </MotionConfig>
        </>
      )}

      <style>
        {`
          .small-screen-message {
            display: ${isSmallScreen ? "block" : "none"};
            text-align: center;
            padding: 20px;
            background-color: #f8f8f8;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
          }
          
          .small-screen-message p {
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}

export default App;