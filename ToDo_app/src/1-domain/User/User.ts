// Userロジック

export class User {
    // ユーザー名
    private name: string;
    // メールアドレス
    private email: string;

    // コンストラクタ
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // ユーザー名を取得するメソッド
    get userName(): string {
        return this.name;
    }

    // メールアドレスを取得するメソッド
    get userEmail(): string {
        return this.email;
    }

    //メールアドレスの正規表現
    // /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

    //パスワードの正規表現
    // /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i;

    // ユーザー名のバリデーションを行うメソッド
    private validateName(name: string): void {
        if (name.length < 1 || name.length > 20) {
            throw new Error("ユーザー名は1文字以上20文字以下である必要があります。");
        }
    }

    // メールアドレスのバリデーションを行うメソッド
    private validateEmail(email: string): void {
        const emailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("無効なメールアドレスです。");
        }
    }

    // ユーザー名を設定するメソッド
    set userName(name: string) {
        this.validateName(name);
        this.name = name;
    }

    // メールアドレスを設定するメソッド
    set userEmail(email: string) {
        this.validateEmail(email);
        this.email = email;
    }

}