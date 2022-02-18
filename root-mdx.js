import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import {
    Blockquote, Code, Headings, PrismSetup
} from './src/components/Complete'

//Wraps the root element and causes changes to the component keys.
//if h2: headings... it overrides the properties of the original/default h2

// const myH2 = props => {
//   //title is a boolean value - console.log(props)
//   if (props.title) {
//     return (
//       <h2 {...props} style={{ fontSize: '2rem', color: 'red' }}>
//         {' '}
//         {props.children}
//       </h2>
//     )
//   }
//   return (
//     <h2 {...props} className="code">
//       {props.children}
//     </h2>
//   )
// }

const components = {
  //logic
  h2: Headings.myH2,
  h4: Headings.myH4,

  //inline code refers to code written in line using back ticks (`code`)
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
}

//shared logic between browser.js && ssr.js
//DRY upheld...
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
