import Button from '../Button';

const Dialog = ({ text, handleCancel, handleConfirm }) => {
    return (
        <div role="dialog">
            <p className="text-gray-900 text-lg mb-5">{text}</p>
            <div className="flex justify-end">
                <Button onClick={handleCancel} className="mr-4">
                    Annuler
                </Button>
                <Button onClick={handleConfirm}>OK</Button>
            </div>
        </div>
    );
};

export default Dialog;
