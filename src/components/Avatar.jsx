import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";


export function Avatar(props) {
    const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
    const {animations: typingAnimation}= useFBX("animations/Typing.fbx")
    const {animations: boxingAnimation}= useFBX("animations/Boxing.fbx")
    const {animations: jumpingAnimation}= useFBX("animations/Falling Idle.fbx")
    const {animations: phoneAnimation}= useFBX("animations/Talking Phone Pacing.fbx")
    const {animations: walkingAnimation}= useFBX("animations/Happy Idle.fbx")
typingAnimation[0].name="Typing";
boxingAnimation[0].name = "Boxing";
jumpingAnimation[0].name = "Falling";
phoneAnimation[0].name="Phone";
walkingAnimation[0].name="Walking";
const { actions } = useAnimations(
    [typingAnimation[0], boxingAnimation[0], jumpingAnimation[0],walkingAnimation[0],phoneAnimation[0]],
    group
  );

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);
  const { nodes, materials } = useGLTF("/models/64ff7021034c10acbdef216d.glb")
  return (
    
    <group {...props} dispose={null} ref={group}>
        <group rotation-x={ - Math.PI /2 }>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton}   morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton}      morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton}    morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}/>
      <skinnedMesh geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton}     morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}/>
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton}  morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}/>
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}  morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}/>
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}  morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton}   morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}/>
    </group>
    </group>
  )
}

useGLTF.preload("/models/64ff7021034c10acbdef216d.glb")
useFBX.preload("animations/Typing.fbx")
useFBX.preload("animations/Boxing.fbx")
useFBX.preload("animations/Falling Idle.fbx")
useFBX.preload("animations/Talking Phone Pacing.fbx")
useFBX.preload("animations/Happy Idle.fbx")