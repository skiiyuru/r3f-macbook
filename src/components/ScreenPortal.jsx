import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  Sky,
} from "@react-three/drei"

export default function ScreenPortal(props) {
  return (
    <RoundedBox {...props}>
      <MeshPortalMaterial>
        <ambientLight />
        {/* <Environment preset="sunset" /> */}
        <Sky />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </MeshPortalMaterial>
    </RoundedBox>
  )
}
