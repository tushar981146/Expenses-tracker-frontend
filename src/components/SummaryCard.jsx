const SummaryCard = ({ title, value, icon: Icon, colorClass, isGoal, goalPercentage }) => {

    const formatCurrency = (amount) => `$${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    const formattedValue = isGoal ? `${goalPercentage}% reached` : formatCurrency(value);
    
    // Determine goal bar color and progress width
    const goalColor = goalPercentage >= 100 ? 'bg-green-500' : 'bg-yellow-500';
    const goalWidth = goalPercentage > 100 ? '100%' : `${goalPercentage}%`;

    return (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
            <div className="flex justify-between items-start mb-3">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <div className={`p-2 rounded-full ${colorClass} bg-opacity-10`}>
                    <Icon className={`w-5 h-5 ${colorClass}`} />
                </div>
            </div>
            
            <p className="text-3xl font-bold text-gray-900 mb-1">
                {formattedValue}
            </p>

            {isGoal && (
                <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${goalColor}`} 
                            style={{ width: goalWidth }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Goal: $6,000</p>
                </div>
            )}
        </div>
    );
};

export default SummaryCard;
