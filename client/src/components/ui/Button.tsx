import { IButtonProps } from '../../interfaces/props/ui';

const Button = ({ children, className, onClick }: IButtonProps) => {
    return (
        <button
            className={`p-4 rounded-md text-white font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
