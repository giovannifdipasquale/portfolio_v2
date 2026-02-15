
import SideBar from 'src/components/SideBar/SideBar'
import { TypingEffect } from 'src/components/TypingEffect/TypingEffect'
import { motion, useInView } from 'framer-motion';
function Home() {

    return (
        <div className="h-screen w-screen p-3 font-geologica z-99 bg-jet">
            <div className="border border-white flex flex-col border-solid h-full w-full">
                <div className='h-25 px-10 py-3 hidden md:block'>


                    <motion.span
                        initial={{
                            display: 'none'
                        }}
                        animate={{
                            display: 'inline-block',
                        }}
                        transition={{
                            delay: 0.8,
                        }}
                    >
                        <TypingEffect text="Giovanni&nbsp;Di&nbsp;Pasqual" />
                    </motion.span>
                    <motion.span className='font-geologica text-5xl my-6'
                        initial={{
                            backgroundColor: 'var(--rosy-copper)',
                            color: 'var(--rosy-copper)',
                            display: 'none'
                        }}
                        animate={{
                            backgroundColor: 'var(--jet-black)',
                            color: 'var(--jet-black)',
                            display: 'inline-block',
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: 1,
                            repeatType: "reverse",
                            repeatDelay: 0.1,
                        }}
                    >
                        e
                    </motion.span>
                    <motion.span
                        initial={{
                            display: 'none'
                        }}
                        animate={{
                            display: 'inline-block',
                        }}
                        transition={{
                            delay: 1.5,
                        }}
                    >
                        <motion.div className='inline-block font-geologica text-5xl my-6'
                            initial={{
                                backgroundColor: 'var(--jet-black)',
                                color: 'var(--white)',

                                // display: 'inline-block',
                            }}
                            animate={{
                                backgroundColor: 'var(--rosy-copper)',
                                color: 'var(--jet-black)',

                                // display: 'none',
                            }}
                            transition={{
                                duration: 0.3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 0.1,
                                ease: "easeInOut",
                            }}
                        >
                            e
                        </motion.div>
                    </motion.span>


                </div>


                <div className="md:grid md:grid-cols-12 bg-jet md:flex-1 md:min-h-0 md:overflow-hidden">
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Home
