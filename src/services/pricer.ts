import DebtItem from "../model/debtItem";

export class Pricer {
    /**
     * @param debt
     */
    static getPrice(debt: DebtItem): number {
        switch (debt.type) {
            case 'bug': return 100;
            case 'architecture': return 100;
            case 'bug-risk': return 5;
            case 'security': return 100;
            case 'security-risk': return 10;
            case 'quality': return 5;
            case 'test': return 5;
            case 'doc': return 3;
            case 'ci': return 30;
            case 'deploy': return 10;
            case 'dev-env': return 10;
            case 'outdated': return 5; // When we use a dependency that is outdated
        }

       return 1;
    }
}
