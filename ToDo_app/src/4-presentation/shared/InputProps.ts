// 入力値の型定義

type Input_Props = {
    label: string;
    type: 'text' | 'number' | 'date';
    value: string | number | Date;
}

// テキストエリア用の継承した型
export type Props_TextArea = Input_Props & {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// テキストボックス用の継承した型
export type Props_Input = Input_Props & {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
