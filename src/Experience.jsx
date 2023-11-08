import { useSpring } from "@react-spring/core"
import { a as three } from "@react-spring/three"
import { a as web } from "@react-spring/web"
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useState } from "react"
import Laptop from "./components/Laptop"

export default function App() {
  const [open, setOpen] = useState(false)

  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })

  return (
    <web.main
      style={{ background: props.open.to([0, 1], ["#f0f0f0", "#A7DAED"]) }}
    >
      <web.h1
        style={{
          opacity: props.open.to([0, 1], [1, 0]),
          transform: props.open.to(
            (o) => `translate3d(-50%,${o * 50 - 100}px,0)`
          ),
        }}
      >
        Hi👋
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -25], fov: 35 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#A7DAED"])}
        />
        <PresentationControls
          enabled={open}
          global
          // rotation={[0.13, 0.1, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-1, 0.75]}
          config={{
            mass: 2,
            tention: 400,
          }}
          snap={{
            mass: 4,
            tention: 400,
          }}
        >
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            >
              <Laptop
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
              />
            </group>
            <Environment preset="city" />
          </Suspense>
        </PresentationControls>

        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  )
}
