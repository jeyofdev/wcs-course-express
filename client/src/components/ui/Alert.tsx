import { IAlertProps } from '../../interfaces/props/ui';

const Alert = ({ className, role, children }: IAlertProps) => {
    return (
        <div
            className={`relative mx-4 p-4 mb-4 rounded-md border ${className}`}
            role={role}
        >
            {children}
        </div>
    );
};

export default Alert;
