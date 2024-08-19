import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function LogoViereckSVG() {
  return (<>
    <SvgIcon sx={{ width:{xs:'70%',sm:'80%',md:'90%'},  height:{xs:'75%', lg:'80%'}}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 219.3 167.1"
      >
        <defs>
          <style>
            {`
              .cls-1 { fill: none; }
              .cls-2 { clip-path: url(#clippath-1); }
              .cls-3 { fill: #fff; filter: url(#drop-shadow-1); }
              .cls-4 { fill: #1d1d1b; }
              .cls-5 { fill: #d20a11; }
              .cls-6 { clip-path: url(#clippath); }
            `}
          </style>
          <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
            <feOffset dx="2.8" dy="2.8"/>
            <feGaussianBlur result="blur" stdDeviation="8.5"/>
            <feFlood floodColor="#000" floodOpacity=".5"/>
            <feComposite in2="blur" operator="in"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <clipPath id="clippath">
            <rect className="cls-1" x="21.9" y="29.6" width="168.3" height="120.3"/>
          </clipPath>
          <clipPath id="clippath-1">
            <rect className="cls-1" x="21.9" y="29.6" width="168.3" height="120.3"/>
          </clipPath>
        </defs>
        <g>
          <g id="Ebene_1">
            <rect className="cls-3" x="27.4" y="27.9" width="164.4" height="120.3"/>
            <g className="cls-6">
              <g className="cls-2">
                <g>
                  <path className="cls-4" d="M134.1,95.6c0,.4-.4,4-2.1,4s-1.1-.5-1.1-1.4.6-4,2-4,1.1.7,1.1,1.5M130.8,101.6c-.5,0-.7-.3-.7-.8s.2-.8,1.2-.8h.6c2.5-.1,3.3-2.5,3.3-4,0-.4,0-.7-.2-1.1.3-.3.6-.5.8-.5s.2.2.2.5c0,.3.2.5.5.6.3,0,.6-.3.6-.7,0-.5-.3-1-.7-1,0,0-.1,0-.2,0-.5,0-1,.3-1.4.7-.4-.6-1.1-1-1.8-.9-1.6,0-3.2,2.1-3.2,3.8s.6,1.6,1.2,2.1c-1.1.1-2,.8-2,1.7,0,1.6,2.5,1.9,3.5,2s1.7.4,1.7,1.4c0,1.5-1.5,1.9-2.6,1.9s-2.4-.6-2.4-2.1c0-.6.3-1.1.8-1.3-.2-.1-.4-.2-.6-.2-.7,0-1.3.7-1.2,1.4,0,0,0,0,0,0,0,1.7,2,2.5,3.5,2.5s3.5-.9,3.5-2.9-.8-2.1-1.9-2.3l-2.4-.4ZM124.8,102l1.2-3.7c.3-.8.6-1.6.9-2.4.4-.8.8-1.5,1.2-1.5s.2.1.2.4c0,.3.3.6.6.6,0,0,0,0,0,0,.3,0,.6-.3.6-.7,0-.5-.4-.9-.9-.9,0,0,0,0,0,0-1.4,0-2.3,2.6-2.6,3.5h0c0-.3.2-1.5.2-1.9,0-1.5-.8-1.6-1-1.6-.9,0-1.6,1.5-2.1,2.5,0,.1-.1.2-.1.3,0,0,0,.2,0,.2,0,0,.1,0,.2,0,.2-.4.8-1.6.9-1.8s.4-.5.6-.5.3.7.3,1c0,1.3-.3,2.6-.7,3.8l-.8,2.9h1.2ZM115.9,93.7c-1.4,0-2.1,2.6-2.1,2.8s0,.2.1.2.1,0,.2-.2c.4-1.4.9-2.1,1.4-2.1s.4.2.4.5c0,.5-1.1,4.5-1.1,5.7,0,.9.6,1.7,1.4,1.8,0,0,0,0,.1,0,1.4,0,2.3-2,2.8-3h0c0,.5-.2,1-.2,1.4,0,.9.4,1.6,1.2,1.6,1.4,0,2.1-2.6,2.1-2.8,0,0,0-.2-.1-.2,0,0,0,0,0,0-.1,0-.2,0-.2.2-.4,1.4-1,2.1-1.3,2.1s-.4-.2-.4-.9c0-.7.1-1.5.3-2.2l.9-4.4c0,0,0-.2,0-.3,0,0,0-.1-.2-.1h-.8c0,0-.2,0-.2.3l-.6,2.7c-.5,2.2-1.7,4.8-2.9,4.8-.3,0-.6-.2-.7-.5,0,0,0-.1,0-.2,0-1,1.1-4.9,1.1-5.9s-.3-1.4-1.2-1.4M109.6,91.4c.2-.8.5-2.2.5-2.4s0-.2-.2-.2c-.3,0-1.4.2-2.2.2s-.3,0-.3.1,0,.2.4.2c.6,0,.7.2.7.5,0,.5-.1,1-.3,1.5l-1.3,6.6c-.2.7-.3,1.4-.3,2.1,0,1.1.7,2.1,1.8,2.2.1,0,.2,0,.3,0,2.1,0,4.1-3.6,4.1-6s-.6-2.6-2-2.6-1.6.9-2.1,1.9h0l.9-4.2ZM107.8,100.3c0-1.1,1.2-6.2,2.9-6.2s.9.6.9,1.4c0,1.9-1.2,6.3-2.8,6.3s-1-.7-1-1.5M104.8,94.7c0,1-1,2.8-3.2,3.8.9-3.3,1.9-4.5,2.7-4.5s.6.2.6.7M100,100c0,1.3.7,2.2,2,2.2s2.9-2.4,2.9-2.6,0-.2-.1-.2-.1,0-.2.2c-1,1.5-1.7,2.2-2.5,2.2s-.9-.4-.9-1.2c0-.6.1-1.2.3-1.7,2.9-1.2,4.2-2.6,4.2-3.9,0-.7-.5-1.3-1.1-1.3,0,0,0,0,0,0-2.2,0-4.4,3.8-4.4,6.4M95.4,99c-.2.6-.3,1.3-.3,2,0,.6.3,1.2.9,1.3,0,0,.2,0,.3,0,.7,0,1.1-.4,1.6-1.1.3-.5.5-1.1.7-1.7,0-.1,0-.2-.1-.2s-.3.3-.3.4c-.2.5-.8,2.1-1.5,2.1s-.5-.2-.5-.6c0-.6.2-1.2.3-1.8l1.1-4.6h1.2c.2,0,.3,0,.3-.2s0-.3-.2-.3h-1.2l.5-2c0-.2,0-.3,0-.5,0-.4-.4-.4-.6-.4s-.4,0-.5.3l-.7,2.6h-1.1c-.2,0-.3,0-.3.3s.1.2.2.2h1.1l-1,4.4ZM88.4,100.7c0,1,.8,1.6,2,1.6,1.3.1,2.5-.9,2.6-2.3,0,0,0-.2,0-.3,0-.7-.1-1-.9-2.2-1-1.4-1.1-1.8-1.1-2.2,0-.7.4-1.2,1.1-1.2,0,0,.1,0,.2,0,.6,0,.8.2.8.7s0,.6.4.6.4-.2.4-.5c0-.7-.7-1.1-1.5-1.1-1.1-.1-2.2.8-2.3,2,0,0,0,.1,0,.2,0,.7.1,1.2,1.2,2.7.7,1,.8,1.3.8,1.8,0,.8-.7,1.5-1.5,1.4,0,0,0,0,0,0-.7,0-1.2-.3-1.2-.8s0-.4,0-.6c0-.3-.2-.5-.5-.5,0,0,0,0,0,0-.3,0-.5.2-.5.7M87.2,94.7c0,1-1,2.8-3.2,3.8.9-3.3,1.9-4.5,2.7-4.5s.6.2.6.7M82.5,100.1c0,1.3.7,2.2,2,2.2s2.9-2.4,2.9-2.6,0-.2-.1-.2-.1,0-.2.2c-1,1.5-1.7,2.2-2.5,2.2s-.9-.4-.9-1.2c0-.6.1-1.2.3-1.7,2.9-1.2,4.2-2.6,4.2-3.9,0-.7-.5-1.3-1.1-1.4,0,0,0,0-.1,0-2.2,0-4.5,3.8-4.5,6.4M78.2,103.6c-.4,2.3-1.1,3.2-1.9,3.2s-.9-.1-.9-.7c0-.7-.2-1-.7-1s-.7.3-.7.8.5,1.3,2,1.3,3.1-.8,3.9-4.7l2.2-11.2c.2-.8.6-1.3,1.3-1.3s.2,0,.2-.2-.1-.2-.3-.2c-.7,0-1.4,0-2,0s-1.4,0-2,0-.3,0-.3.2,0,.2.3.2c1,0,1.2.3,1.2.7,0,.5-.1,1-.2,1.6l-2.2,11.4Z"/>
                  <path className="cls-4" d="M106.8,48.8c-.7,1.1-.7,1.9-.9,1.9s-.6-1.3-1.3-2.2c-.9-1.2-1.7-1.9-2.1-1.4-.3.4.1,2.2,1.5,4.1-.6,0-1.2,0-1.8,0-1,.1-2.1.5-2.2.9-.1.5.8,1,2.4,1.2.6,0,1.2,0,2,0s-.4.7-.8,1.6c-.5,1.1-1.1,2.8-.6,3.1.8.5,2.7-2.6,3-3.5,0-.1.4,1.1,1.2,1.9s1.8,1.7,2.4,1.4c.3-.1,0-1.6-.8-2.8-.5-.8-1.5-1.5-1.4-1.8s.8.4,2.2.3c1,0,2.1-.2,2.5-.5,1-.7-.8-1.3-2.5-1.4-.9,0-1.8.2-2.3.2-.2,0,.7-.6,1.4-1.8s1-2.6.4-2.9-1.7,1.1-2.2,1.9"/>
                  <path className="cls-4" d="M106.8,48.8c-.7,1.1-.7,1.9-1,1.9s-.6-1.3-1.3-2.2c-.9-1.2-1.7-1.9-2.1-1.4-.3.4.1,2.2,1.5,4.1-.6,0-1.2,0-1.8,0-1,.1-2.2.5-2.2.9-.1.5.8,1,2.4,1.2.6,0,1.2,0,2,0s-.4.7-.8,1.6c-.5,1.1-1.1,2.8-.6,3.1.8.5,2.7-2.6,3-3.5,0-.1.4,1.1,1.2,1.9s1.8,1.7,2.4,1.4c.3-.1,0-1.6-.8-2.8-.5-.8-1.5-1.5-1.4-1.8s.8.4,2.2.3c1,0,2.1-.2,2.5-.5,1-.7-.8-1.3-2.5-1.4-.9,0-1.8.2-2.3.2-.2,0,.8-.6,1.4-1.8s1-2.6.4-2.9-1.7,1.1-2.2,1.9"/>
                  <path className="cls-5" d="M106.1,110.1c.6,0,.9,4.6,4.7,6.8,0,0,5.3-4.7,7.5-3.8,0,0,.2.3-.2.7-2,2.1-3.1,4.9-3.3,7.9-.3,6.2-.1,7.5-5.4,9.5-.9.3-.9.5-.9,1.6,0,0,0,.6,1,.7s3.9,0,4.2.3.4,1.2.3,2c-.1,1.2-6,1-7.9,1s-7.6.5-7.9-.8c-.2-.9,0-1.9.3-2.3s3.2-.2,4.2-.3,1-.7,1-.7c0-1.2,0-1.3-.9-1.6-5.2-1.9-5-3.2-5.3-9.5-.2-3-1.3-5.8-3.3-7.9-.4-.4-.3-.7-.2-.7,2.2-.9,7.5,3.8,7.5,3.8,3.8-2.1,4.1-6.8,4.7-6.8"/>
                  <path className="cls-4" d="M150.2,77.7c0,1.4-.3,1.9-1.1,1.9-.6,0-.6,0-.6.2s0,.2.3.2c.6,0,1.4,0,2.2,0s1.7,0,2.2,0,.3,0,.3-.2,0-.2-.6-.2c-.7,0-1.1-.5-1.1-1.9v-9.3c0-.3.1-.4,2.6-.4s2.1.2,2.2,1.6c0,.6.1.7.2.7s.1,0,.1-.2v-2.3c0-.2,0-.3-.3-.3h-11.5c-.2,0-.3.1-.3.3v2.3c0,.2,0,.2.1.2s.2,0,.2-.7c0-1.4,1-1.6,2.2-1.6,2.5,0,2.6,0,2.6.4v9.3ZM141.8,70c0-.9,0-1.9,1.1-2,.5,0,.6,0,.6-.2s0-.2-.2-.2c-.4,0-.8,0-1.6,0s-1.3,0-1.7,0-.3,0-.3.2.2.2.7.2c1,0,1,1.1,1,2v4.9c0,2.1-.2,4.8-3.6,4.8s-3.3-.7-3.3-3.4v-6.3c0-1.4.4-1.9,1.1-2,.6,0,.6,0,.6-.2s0-.2-.3-.2c-.6,0-1.4,0-2.2,0s-1.7,0-2.2,0-.3,0-.3.2,0,.2.6.2c.8,0,1.1.5,1.1,2v6.4c0,2.8,1.7,4,4.3,4s4.6-2,4.6-4.9v-5.5ZM118.9,74.1c0,4.1,2.6,6.2,5.7,6.2.9,0,1.9-.2,2.7-.7.7-.5,1.5-.8,2.4-.9,0-.9,0-1.5,0-1.7,0-.9,0-1.6.9-1.7.2,0,.3,0,.3-.2s0-.2-.3-.2c-.6,0-1.3,0-1.9,0s-1.5,0-2.2,0-.2,0-.2.2,0,.2.5.2c1,0,1,.7,1,1.8,0,2.4-1.7,2.8-3.1,2.8s-3.8-1.1-3.8-6,1.1-6.3,4.1-6.3,2.9,1.7,3.3,2.8c.1.5.2.7.3.7s.2-.1.2-.5c0-.9,0-2.3,0-2.7s0-.3-.2-.3-.2.3-.3.5c0,.1-.1.2-.2.2,0,0-.2,0-.3,0-1-.6-2.1-.9-3.2-.9-3.5,0-5.9,3-5.9,6.8M104.1,69.5c0-.9.5-1.7,1.3-1.8,0,0,0,0,.1,0,.8,0,1.4.8,1.4,2.3,0,1.3-.6,2.4-1.5,3.1-1-1.6-1.4-2.7-1.4-3.6M102.9,77.1c0-1.1.6-1.9,1.6-2.6.8,1.3,1.7,2.5,2.7,3.6-.6.8-1.4,1.3-2.3,1.3-1.1,0-1.9-1.2-1.9-2.4M101.5,78c0,1.4,1,2.4,2.6,2.4,1.3,0,2.6-.7,3.5-1.9,1.2,1.5,2.3,1.9,3,1.9,1.5,0,2.4-1.3,2.4-1.6s0-.2-.2-.2c-.4,0-.6.8-1.4.8s-1.4-.6-2.8-2.3c1.3-1.8,1.7-3.7,2.3-3.7.2,0,.3.1.3.3,0,0,0,0,0,0,0,.1,0,.2,0,.4,0,.4.4.7.7.7.5,0,.9-.4.9-.9,0,0,0,0,0,0,0-.7-.4-1.3-1-1.3,0,0-.1,0-.2,0-.8,0-1.2.3-1.8,1.6-.4.9-.9,1.8-1.4,2.6-.9-1-1.7-2.1-2.4-3.2,2.1-1.7,2.3-2.7,2.3-3.9,0-1.3-.9-2.3-2.1-2.4,0,0-.1,0-.2,0-1.3,0-2.7,1.1-2.7,3.4,0,1.2.5,2.4,1.2,3.4-2.3,1.7-2.8,2.6-2.8,3.9M89.2,77.7c0,1.4-.3,1.9-1.1,1.9-.6,0-.6,0-.6.2s0,.2.3.2c.6,0,1.4,0,2.2,0s1.7,0,2.3,0,.3,0,.3-.2,0-.2-.6-.2c-.9,0-1.2-.5-1.2-1.9v-3.7h1c.8-.1,1.6.5,1.7,1.4,0,0,0,0,0,0,0,.6.2.6.3.6s.2,0,.2-.2c0-.8,0-1.5,0-2.3s0-1.4,0-2.1,0-.2-.2-.2-.2,0-.2.6c0,1.4-.7,1.7-2.7,1.7v-4c0-1.2,0-1.5.7-1.5h1.2c1.3,0,1.9.2,2.4.6.4.4.6.8.7,1.4,0,.1,0,.3.2.3s.2,0,.2-.2c0-.4-.2-1.8-.2-2.2,0-.2,0-.3-.3-.3-1.9,0-3.8,0-5.6,0s-1.7,0-2.3,0-.3,0-.3.2,0,.2.6.2c.7,0,1.1.5,1.1,1.9v7.8ZM75.6,73.8c0-3,1.3-6.1,4.2-6.1s4.2,3.1,4.2,6.1-1.3,6.1-4.1,6.1-4.2-3.1-4.2-6.1M73.6,73.8c0,3.8,2.6,6.5,6.2,6.5s6.2-2.7,6.2-6.5-2.6-6.5-6.2-6.5-6.3,2.7-6.3,6.5M68.8,77.7c0,1.4-.3,1.9-1.1,1.9-.6,0-.6,0-.6.2s.1.2.3.2c.6,0,1.4,0,2.2,0s1.7,0,2.2,0,.3,0,.3-.2,0-.2-.6-.2c-.7,0-1.1-.5-1.1-1.9v-7.8c0-1.4.3-1.9,1.1-1.9.6,0,.6,0,.6-.2s0-.2-.3-.2c-.6,0-1.4,0-2.2,0s-1.7,0-2.2,0-.3,0-.3.2,0,.2.6.2c.7,0,1.1.5,1.1,1.9v3.4h-6.1v-3.4c0-1.4.3-1.9,1.1-1.9.6,0,.6,0,.6-.2s0-.2-.3-.2c-.6,0-1.4,0-2.2,0s-1.7,0-2.2,0-.3,0-.3.2,0,.2.6.2c.7,0,1.1.5,1.1,1.9v7.8c0,1.4-.3,1.9-1.1,1.9-.6,0-.6,0-.6.2s0,.2.3.2c.6,0,1.4,0,2.2,0s1.7,0,2.2,0,.3,0,.3-.2,0-.2-.6-.2c-.7,0-1.1-.5-1.1-1.9v-3.8h6.1v3.8Z"/>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
    </>
  );
}
