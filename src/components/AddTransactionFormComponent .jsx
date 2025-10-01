import React, { useState } from 'react';
import {
    Plus, DollarSign, ArrowUpRight, Calendar, Tag, FileText,
    ArrowDownLeft
} from 'lucide-react';
import { useExpensesStore } from '../store/useExpensesStore';
import { useParams } from 'react-router-dom';




const categories = ['Food', 'Work', 'Housing', 'Health', 'Utilities', 'Miscellaneous'];
const transactionTypes = ['Expense', 'Income'];

// Helper component for structuring input fields
const InputGroup = ({ label, icon: Icon, children }) => (
    <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700 flex items-center space-x-1">
            <Icon className="w-4 h-4 text-indigo-500" />
            <span>{label}</span>
        </label>
        {children}
    </div>
);



const AddTransactionFormComponent = () => {

    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        type: 'Expense',
        category: categories[0],
        date: "", // Default to today
    });

    const { id } = useParams();
    

    const { addExpense } = useExpensesStore();

    // NOTE: If you were using this component in a production environment, 
    // you would replace the usage of 'alert' with a custom modal or toast notification.

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert amount to correct sign based on type
        const parsedAmount = parseFloat(formData.amount);
        const finalAmount = formData.type === 'Expense' ? -Math.abs(parsedAmount) : Math.abs(parsedAmount);

        if (isNaN(parsedAmount) || parsedAmount <= 0 || formData.description.trim() === '') {
            // Using console log as a safer substitute for alert()
            console.error("Please enter valid transaction details.");
            return;
        }



        addExpense({
            ...formData,
            amount: parsedAmount,
             
        }, id);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto my-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <Plus className="w-6 h-6 text-indigo-600" />
                <span>Add New Transaction</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                    {/* Description */}
                    <div className="lg:col-span-2">
                        <InputGroup label="Description" icon={FileText}>
                            <input
                                type="text"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="e.g., Dinner with client"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </InputGroup>
                    </div>

                    {/* Amount */}
                    <InputGroup label="Amount" icon={DollarSign}>
                        <input
                            type="number"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                            placeholder="100.00"
                            step="0.01"
                            min="0.01"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </InputGroup>

                    {/* Type (Income/Expense) */}
                    <InputGroup label="Type" icon={ArrowUpRight}>
                        <select
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                        >
                            {transactionTypes.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </InputGroup>

                    {/* Category */}
                    <InputGroup label="Category" icon={Tag}>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                            required
                        >
                            {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </InputGroup>

                    {/* Date */}
                    <InputGroup label="Date" icon={Calendar}>
                        <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                            required
                        />
                    </InputGroup>

                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-8 py-3 border border-transparent shadow-md text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors transform hover:scale-[1.01]"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Record Transaction
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransactionFormComponent;
