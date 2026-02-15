
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export function TypingEffect({ text = 'Typing Effect' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      className="font-geologica text-5xl py-6 text-white"
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            color: 'black',
            backgroundColor: 'var(--rosy-copper)',
            display: 'none'
          }}
          animate={isInView ? {
            display: 'inline-block',
            // We define the sequence: Start Rosy -> Stay Rosy -> Turn Black
            backgroundColor: [
              'var(--rosy-copper)',
              'var(--rosy-copper)',
              'var(--jet-black)'
            ],
            color: ['black', 'black', 'white']
          } : {}}
          transition={{
            duration: 0.04, // Increased duration so you can actually see the hold
            delay: index * 0.04,
            // 0 to 0.6 = Stay Rosy | 0.6 to 1.0 = Transition to Black
            times: [0, 0.6, 1],
            ease: "easeInOut"
          }}
        >
          {letter}
        </motion.span>
        // <motion.span
        //   key={index}
        //   initial={{
        //     color: 'black',
        //     backgroundColor: 'var(--rosy-copper)',
        //     display: 'none'
        //   }}
        //   animate={isInView ? {
        //     display: 'inline-block',
        //     // We define the sequence: Start Rosy -> Stay Rosy -> Turn Black
        //     backgroundColor: [
        //       'var(--rosy-copper)',
        //       'var(--rosy-copper)',
        //       'var(--jet-black)'
        //     ],
        //     color: ['black', 'black', 'white']
        //   } : {}}
        //   transition={{
        //     duration: 0.04, // Increased duration so you can actually see the hold
        //     delay: index * 0.04,
        //     // 0 to 0.6 = Stay Rosy | 0.6 to 1.0 = Transition to Black
        //     times: [0, 0.6, 1],
        //     ease: "easeInOut"
        //   }}
        // >
        //   {letter}
        // </motion.span>
      ))}

    </h2>
  );
}