export interface IButtonProps {
    title: string;
    disable: boolean;
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}
