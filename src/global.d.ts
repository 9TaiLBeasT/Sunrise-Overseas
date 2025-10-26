export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  export const MeshLineMaterial: React.ComponentType<React.HTMLAttributes<HTMLElement>>;

}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}