export type AccountType = {
    date: string;
    narration: string;
    chequeNo: string;
    valueDate: string;
    withdrawal: number;
    deposit: number;
    closingBalance: number;
}

export const ACCOUNTS: AccountType[] = [
    {
        "date": "01/02/2019",
        "narration": "NEFT",
        "chequeNo": "123/A",
        "valueDate": "01/02/2019",
        "withdrawal": 10000.00,
        "deposit": 0.00,
        "closingBalance": 20000.00
    },
    {
        "date": "01/03/2019",
        "narration": "NEFT",
        "chequeNo": "1256/A",
        "valueDate": "02/02/2019",
        "withdrawal": 15000.00,
        "deposit": 0.00,
        "closingBalance": 30000.00
    },
    {
        "date": "03/02/2019",
        "narration": "NEFT",
        "chequeNo": "345/A",
        "valueDate": "03/02/2019",
        "withdrawal": 0.00,
        "deposit": 15000.00,
        "closingBalance": 15000.00
    }
]