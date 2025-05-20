export interface SavingsBox {
    name: string;
    amount: number;
  }
  
  export interface Goal {
    name: string;
    amount: number;
    completed: boolean;
  }
  
  export interface Transaction {
    recipient: string;
    amount: number;
    txid?: string;
    status?: 'pending' | 'confirmed' | 'failed';
  }
  