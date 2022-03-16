import Image from 'next/image'
import React, { useState } from 'react'
import { arrayGalery } from './arrayGalery'
import Modal from './modal'

const Results = () => {
    // const [show, setShow] = useState(false)
    const [imageToModal, setImageToModal] = useState()

    console.log(imageToModal)
    return (
        <div id="Results" className="px-8 pt-40 ">
            <div className="flex justify-center">
                <div className="flex justify-center">
                    <div className="gap-8 columns-1 sm:columns-2 lg:columns-3">
                        {arrayGalery.map((imageSrc, index) => {
                            console.log(imageSrc)
                            return (
                                <div key={index}>
                                    <div
                                        type="submit"
                                        onClick={() => {
                                            //  setShow(true)
                                            setImageToModal(imageSrc.img)
                                        }}
                                    >
                                        <Image
                                            alt="modal"
                                            src={imageSrc.img.src}
                                            width={imageSrc.img.width}
                                            height={imageSrc.img.height}
                                            className="duration-300 cursor-pointer hover:relative hover:z-[200] hover:scale-125 hover:rotate-6 hover:opacity-70"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="">
                    {' '}
                    <Modal
                        show={imageToModal}
                        onHide={() => setImageToModal(undefined)}
                    >
                        <div className="flex justify-center">
                            {imageToModal && (
                                <Image
                                    alt="modal"
                                    src={imageToModal.src}
                                    className="relative"
                                    width={imageToModal.width}
                                    height={imageToModal.height}
                                />
                            )}
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Results
