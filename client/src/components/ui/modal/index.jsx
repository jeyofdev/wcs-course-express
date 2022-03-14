import { useEffect } from 'react';

const Modal = ({ isShow, handleClose, children }) => {
    useEffect(() => {
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', escape, false);

        // if (isShow) {
        //     console.log('ok');
        //     document.body.style.overflowY = 'hidden';
        // } else {
        //     document.body.style.overflowY = 'scroll';
        // }

        return () => {
            document.removeEventListener('keydown', escape, false);
        };
    }, [isShow, handleClose]);

    return (
        <>
            {isShow && (
                <div
                    className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-900 bg-opacity-90 flex items-center"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            handleClose();
                        }
                    }}
                >
                    <div
                        className="p-6 rounded-lg bg-white w-10/12 max-w-500 mx-auto"
                        aria-modal
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
