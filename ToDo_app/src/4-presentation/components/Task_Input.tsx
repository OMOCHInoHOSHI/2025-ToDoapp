// タスクのプロパティ入力フォームのコンポーネント(UI部品)

import React, { useState } from 'react';
import './Task_Input.css'; // スタイルを適用

// TaskInputコンポーネントの型定義S------------------------------------------
type Input_String = {
    input_string: string; // 入力された文字列
}

type Input_Number = {
    input_number: number; // 入力された数値
}

type Input_Date = {
    input_date: Date; // 入力された日付
}

// Taskinputコンポーネントの型定義E------------------------------------------


