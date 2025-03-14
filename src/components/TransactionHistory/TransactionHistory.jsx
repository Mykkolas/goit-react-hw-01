import stylesHistory from "./TransactionHistory.module.css"


export default function TransactionHistory({ items }) {
    return <div className={stylesHistory.container}>
        <table className={stylesHistory.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type.toUpperCase()}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
}