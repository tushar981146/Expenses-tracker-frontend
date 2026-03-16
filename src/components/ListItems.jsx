import { useState } from "react";
import { Edit, Trash2, Check } from 'lucide-react';
import { useExpensesStore } from "../store/useExpensesStore";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
  const [editTitle, setEditTitle] = useState(item.title);
  const { isLoading, updateTitleList, deleteTitleList, toggleEdit } = useExpensesStore();
  const navigate = useNavigate();


  const handleUpdate = () => {
    const trimmedTitle = editTitle.trim();
    if (!trimmedTitle || isLoading) return;

    // Update the title in store and close edit mode
    updateTitleList(item._id, trimmedTitle);
  };

  const handleDelete = () => {

    deleteTitleList(item._id);
  };

  const handleDivClick = (id) => {
        
    navigate(`/expenses/${id}`); 
  };
  return (
    <div  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 mb-3">
      {item.isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
          autoFocus
          className="flex-grow mr-4 px-3 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none text-gray-800"
        />
      ) : (
        <span onClick={() => handleDivClick(item._id)} className="text-lg cursor-pointer font-medium text-gray-800 break-words pr-4 flex-grow">
          {item.title}
        </span>
      )}

      <div className="flex space-x-2 shrink-0">
        <button
          onClick={() => item.isEditing ? handleUpdate() : toggleEdit(item._id)}
          className={`p-2 rounded-full transition-colors ${item.isEditing ? 'bg-green-500 text-white hover:bg-green-600' : 'text-indigo-600 hover:bg-indigo-100'}`}
          title={item.isEditing ? "Save" : "Edit"}
        >
          {item.isEditing ? <Check className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
        </button>
        <button
          onClick={handleDelete}
          className="p-2 rounded-full text-red-600 hover:bg-red-100 transition-colors"
          title="Delete"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
