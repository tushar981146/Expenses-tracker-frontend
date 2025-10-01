const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="p-3 bg-indigo-100/50 rounded-xl mb-3">
            <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <p className="font-semibold text-gray-800">{title}</p>
    </div>
);

export default FeatureCard;