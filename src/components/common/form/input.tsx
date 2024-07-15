import { ChangeEvent } from "react";
import { IconType } from "react-icons";
import "../../../styles/form.scss"

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    Icon?: IconType;
};
export const Input: React.FC<InputProps> = ({type, placeholder, onChange, Icon}) => {
    return (
        <div className="relative">
            {Icon && <Icon className="input-icon absolute top-100 text-xl" />}
            <input type={type} placeholder={placeholder} onChange={onChange} className={`input-field w-full py-3 ${Icon ? 'pl-10' : 'px-4'}`} />
        </div>
    )
}