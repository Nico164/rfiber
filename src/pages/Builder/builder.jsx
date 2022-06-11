import 'grapesjs-preset-webpage';
import { GrapesjsReact } from 'grapesjs-react';
import 'grapesjs-preset-newsletter';
import 'grapesjs-mjml';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';



export const BuilderPage = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-preset-newsletter',
      "grapesjs-mjml",
      'gjs-blocks-basic'

    ]}
  />;
};