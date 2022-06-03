import { IDialogProps } from '../../../interfaces/props/ui';
import Button from '../Button';

const Dialog = ({ text, handleCancel, handleConfirm }: IDialogProps) => {
    return (
        <div role="dialog">
            <p className="text-gray-900 text-lg mb-5">{text}</p>
            <div className="flex justify-end">
                <Button onClick={handleCancel} className="bg-red-500 mr-4">
                    Annuler
                </Button>
                <Button onClick={handleConfirm} className="bg-green-500">
                    OK
                </Button>
            </div>
        </div>
    );
};

export default Dialog;
