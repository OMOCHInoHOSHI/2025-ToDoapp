// タスクのプロパティ入力フォームのコンポーネント(UI部品)
// 未入力でもエラーにならない

// import React, { useState } from 'react';
import './Task_Input.css'; // スタイルを適用
import { Input_Props } from '../shared/InputProps';

// TaskInputコンポーネントの型定義S------------------------------------------


// type Input_String  = {
//     input_string: string; // 入力された文字列
// }

// type Input_Number = {
//     input_number: number; // 入力された数値
// }

// type Input_Date = {
//     input_date: Date; // 入力された日付
// }


// Taskinputコンポーネントの型定義E------------------------------------------


// TaskInputコンポーネント
const TaskInput: React.FC<Input_Props> = ({ label, type, value, onChange }) => {
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
        <div className="task-input">
        <label>{label}</label>
        <input
            type={type} // 'text' | 'number' | 'date' のみ
            value={inputValue}
            onChange={onChange}
            className="task-input-field"
        />
        </div>
    );
};


export default TaskInput;
