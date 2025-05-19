// 入力値の型定義

export type Input_Props = {
    label: string;
    type: 'text' | 'number' | 'date';
    value: string | number | Date;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}