import { LogoComponent } from '../SvgLogo';

const DotNet = ({ className }: LogoComponent) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" className={className}>
    <rect x="12.48" y="0" width="211.33" height="211.33" fill="#554ea1" />
    <path d="m38.55,138.47c-1.58,0-2.92-.53-4.02-1.58-1.1-1.08-1.66-2.36-1.66-3.84s.55-2.8,1.66-3.88c1.1-1.08,2.44-1.62,4.02-1.62s2.96.54,4.06,1.62c1.13,1.08,1.7,2.37,1.7,3.88s-.57,2.76-1.7,3.84c-1.1,1.05-2.46,1.58-4.06,1.58Z" fill="#fff" />
    <path d="m101.59,137.58h-10.25l-27-42.6c-.68-1.08-1.25-2.2-1.69-3.35h-.24c.21,1.24.32,3.89.32,7.96v37.99h-9.07v-57.96h10.92l26.1,41.59c1.1,1.72,1.81,2.91,2.13,3.56h.16c-.26-1.54-.39-4.14-.39-7.8v-37.35h9.03v57.96Z" fill="#fff" />
    <path d="m145.74,137.58h-31.73v-57.96h30.47v8.16h-21.09v16.41h19.43v8.12h-19.43v17.14h22.35v8.12Z" fill="#fff" />
    <path d="m190.84,87.79h-16.24v49.79h-9.38v-49.79h-16.2v-8.16h41.82v8.16Z" fill="#fff" />
  </svg>
);

export default DotNet;
