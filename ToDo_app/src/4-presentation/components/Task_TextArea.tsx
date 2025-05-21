// 改行できる入力ボックス


import './Task_TextArea.css'
import { Props_TextArea } from '../shared/InputProps';


// TaskInputコンポーネント

const TaskTextArea: React.FC<Props_TextArea> = ({ label, type, value, onChange }) => {
  // 入力値を HTMLInputElement に適した型に変換
    let inputValue: string | number;

    // 日付型の場合は、DateオブジェクトをISO形式の文字列に変換
    // それ以外はそのまま文字列または数値として扱う
    if (type === 'date') {
        inputValue = value instanceof Date ? value.toISOString().split('T')[0] : '';
    } else {
        inputValue = value as string | number;
    }

    return (
        <div className="task-textarea">
        <label>{label}</label>
        <textarea
            value={inputValue}
            onChange={onChange}
            className="task-textarea-field"
        />
        </div>
    );
};

export default TaskTextArea;