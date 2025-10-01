import SimpleTodoList from './SimpleTodoList';

const Lists = () => {

    return (
        <div className="min-h-screen bg-red-100 flex flex-col font-inter">
            <div className="flex min-h-[80vh] bg-white rounded-b-xl sm:rounded-b-3xl">
                <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <SimpleTodoList />
                </div>
            </div>
        </div>
    );
};

export default Lists;
