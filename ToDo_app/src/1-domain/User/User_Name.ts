// // 使うの辞めたファイル
// // ユーザー名のクラス
// export class UserName {
//     private name: string;

//     constructor(name: string) {
//         this.validateName(name);
//         this.name = name;
//     }

//     get userName(): string {
//         return this.name;
//     }

//     set userName(name: string) {
//         if (name.length < 1 || name.length > 20) {
//             throw new Error("ユーザー名は1文字以上20文字以下である必要があります。");
//         }
//         this.name = name;
//     }

//     // ユーザー名のバリデーションを行うメソッド
//     private validateName(name: string): void {
//         if (name.length < 1 || name.length > 20) {
//             throw new Error("ユーザー名は1文字以上20文字以下である必要があります。");
//         }
//     }

// }
