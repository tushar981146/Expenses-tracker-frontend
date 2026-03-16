import SpendingBarChart from "./SpendingBarChart"
import IncomeExpenseDonut from "./IncomeExpenseDonut"
import { useEffect, useState } from "react";
import { useExpensesStore } from "../store/useExpensesStore";


function Report() {

  const { expenses, fetchExpenses, titleList, fetchTitleList } = useExpensesStore();
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    fetchTitleList();
  }, [fetchTitleList]);

  useEffect(() => {
    if (selectedCategory) {
      fetchExpenses(selectedCategory);
    }
  }, [selectedCategory, fetchExpenses]);

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };



  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


      {/* Monthly Spending Bar Chart */}
      <SpendingBarChart expenses={expenses} />

      {/* Income vs. Expenses Donut Chart */}
      <div className="col-span-1">
        <IncomeExpenseDonut expenses={expenses} />
      </div>

      <select
        value={selectedCategory}
        onChange={handleSelectChange}
        className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700 text-sm"
      >
        <option value="">-- Select Report --</option>
        {titleList.map((c) => (
          <option key={c._id} value={c._id}>{c.title}</option>
        ))}
      </select>
    </div>
  )
}

export default Report