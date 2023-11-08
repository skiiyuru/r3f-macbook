import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei"
import Macbook from "./components/Macbook"
import { Suspense } from "react"

export default function Experience() {
  // const computer = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  // )

  return (
    <>
      {/* Environment */}
      <color args={["#241a1a"]} attach={"background"} />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
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
        <Float rotationIntensity={0.4}>
          <Suspense>
            {/* laptop model */}
            <Macbook position-y={-1.2}>
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://kiiyuru-portal.vercel.app/" />
              </Html>
            </Macbook>

            {/* laptop screen light */}
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={"#93C94D"}
              rotation={[0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
          </Suspense>

          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            // children={"STEPHEN\rKIIYURU"}
            maxWidth={2}
            textAlign="center"
          >
            STEPHEN KIIYURU
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}