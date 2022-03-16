import Image from 'next/image'
import React, { useState } from 'react'
import { arrayGalery } from './arrayGalery'
import Modal from './modal'

const Results = () => {
    // const [show, setShow] = useState(false)
    const [imageToModal, setImageToModal] = useState()

    console.log(imageToModal)
    return (
        <div id="Results" className="p-32 bg-white">
            <div className="flex justify-center p-24 text-4xl font-bold font-raleway">
                <h1 className="text-black">
                    <span className="border-b-4 border-[#95b89f]">Resul</span>
                    tados
                </h1>
            </div>
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
                                        className="duration-300 cursor-pointer hover:relative hover:z-50 hover:scale-125"
                                    >
                                        <Image
                                            alt="modal"
                                            className=""
                                            src={imageSrc.img.src}
                                            width={imageSrc.img.width}
                                            height={imageSrc.img.height}
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
