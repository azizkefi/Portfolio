import {

  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";

import { Office } from "./Office";


export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();


  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5: 0, {
      ...framerMotionConfig,
    });
   
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const sectionToAnimation = {
    0: "Typing",
    1: "Boxing",
    2: "Walking",
    3: "Phone",
  };
  
  const setSectionAnimation = (section) => {
    // Set the characterAnimation to "Falling" with a 600ms delay
    setCharacterAnimation("Falling");
    
    // Wait for 600ms and then set the section-specific animation
    setTimeout(() => {
      // Check if the section value is a valid key in the mapping
      if (sectionToAnimation.hasOwnProperty(section)) {
        // Set the characterAnimation based on the section value
        setCharacterAnimation(sectionToAnimation[section]);
      } else {
        // Set a default animation if the section value is not found in the mapping
        setCharacterAnimation("Falling");
      }
    }, 500);
  };
  
  useEffect(() => {
    // Call setSectionAnimation when the section changes
    setSectionAnimation(section);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(),0, 0);



  });

  return (
    <>
    
      <motion.group
        position={[1.7272935059634513, -0.7000000000000002, 2.51801948466054]}
        rotation={[-3.141592653589793, 1.0053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 1.4,
            scaleY:1.4,
            scaleZ: 1.4,
          },
          1: {
            y: -viewport.height +0.8,
            x: 0,
            z: 7,
            rotateX: -0.4,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 -0.5,
            z: 2,
            rotateX: 0,
            rotateY: Math.PI / 4,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 -2,
            x: 2,
            z: 0,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
            scaleX:1.3,
            scaleY:1.3,
            scaleZ:1.3,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={0.8} />
      <motion.group
        position={[1, 2, 3]}
        scale={[1.4, 1.4, 1.4]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? -1 : -1,
        }}
      >
        <Office />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>

    

    </>
  );
};