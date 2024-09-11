
const OrderForm = ({ formData, handleInputChange, handleSubmit, editMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="productId"
        value={formData.productId}
        onChange={handleInputChange}
        placeholder="Product ID"
        required
        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
        placeholder="Quantity"
        required
        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleInputChange}
        placeholder="User ID"
        required
        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
      />
      <input
        type="text"
        name="warehouseId"
        value={formData.warehouseId}
        onChange={handleInputChange}
        placeholder="Warehouse ID"
        required
        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
      />
      <input
        type="text"
        name="branchId"
        value={formData.branchId}
        onChange={handleInputChange}
        placeholder="Branch ID"
        required
        className="bg-white-text dark:bg-black-contents border rounded px-3 w-full py-2"
      />
      <button type="submit">
        {editMode ? "Update Order" : "Create Order"}
      </button>
    </form>
  );
};

export default OrderForm;
