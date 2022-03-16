import { XSvg } from 'common/svgIcons'
import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ show = false, onHide, children }) => {
    return (
        <div className="h-full w-ful">
            {show && <div className="overlay" onClick={onHide} />}

            <div className="flex justify-center ">
                <AnimatePresence>
                    {show && (
                        <motion.main
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className=" modal"
                        >
                            <div>
                                <div className="absolute flex z-[1000] justify-center sm:justify-end">
                                    <button
                                        onClick={onHide}
                                        className=" fechar bg-[#00000070] p-2  text-white"
                                    >
                                        <XSvg />
                                    </button>
                                </div>
                                {children}
                            </div>
                        </motion.main>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Modal
