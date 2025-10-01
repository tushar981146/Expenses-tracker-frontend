import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import AddTransactionFormComponent from "./AddTransactionFormComponent "
import { useExpensesStore } from '../store/useExpensesStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const TransactionsTable = () => {

    const { expenses, isLoading, fetchExpenses } = useExpensesStore();

    const formatCurrency = (amount) => `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    const { id } = useParams();


    useEffect(() => {

        fetchExpenses(id);
    }, [fetchExpenses]);





    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 col-span-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Date', 'Description', 'Amount', 'Type', 'Category'].map((header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            expenses.map((transaction, index) => {
                                {
                                    if (id === transaction.userId) { 
                                        return (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.description}</td>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${transaction.type === 'Expense' ? 'text-red-600' : 'text-green-600'}`}>
                                                    {transaction.type === 'Expense' ? <ArrowUpRight className="inline w-4 h-4 mr-1" /> : <ArrowDownLeft className="inline w-4 h-4 mr-1" />}
                                                    {formatCurrency(Math.abs(transaction.amount))}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.category === 'Expense' ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'}`}>
                                                        {transaction.category}
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                }
                            })
                    }
                    </tbody>
                </table>
            </div>
            <AddTransactionFormComponent />
        </div>
    )
};

export default TransactionsTable;