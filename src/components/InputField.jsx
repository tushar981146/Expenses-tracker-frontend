const InputField = ({ label, type = 'text', value, onChange, placeholder, icon: Icon }) => (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
            </div>
        </div>
    );


export default InputField;