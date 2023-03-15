import * as S from './input.style';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className='relative'>
      <S.Input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder=' '
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </div>
  );
};

export default Input;
