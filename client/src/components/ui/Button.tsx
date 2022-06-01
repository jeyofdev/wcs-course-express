import { IButtonProps } from '../../interfaces/props/ui';

const Button = ({ children, className, onClick }: IButtonProps) => {
    return (
        <button
            type="submit"
            className={`p-4 rounded-md text-white font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
