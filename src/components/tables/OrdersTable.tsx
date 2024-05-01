import React, { useState, useEffect } from 'react';
import {
  fetchOrdersFromServer,
  updateOrderOnServer,
  deleteOrderFromServer,
} from '../../redux/slices/ordersApi';

interface Props {
  updateOrder: (updatedOrder: unknown) => void;
  deleteOrder: (orderId: unknown) => void;
  disableActions?: boolean;
  data: unknown[];
}

const OrdersTable: React.FC<Props> = ({ updateOrder, deleteOrder, disableActions = false, data }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<unknown>({ id: 0, DrugName: '', Quantity: '', Manufacturer: '', ManufacturerCountry: '', Status: '' });
  // const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const orders = await fetchOrdersFromServer();
      setData(orders);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    const selectedOrder = data.find((order) => order.id === id);
    if (selectedOrder) {
      setEditedData(selectedOrder);
    }
  };

  const handleSave = async () => {
    if (editedData.id !== 0) {
      try {
        await updateOrderOnServer(editedData.id, editedData);
        updateOrder(editedData);
        setEditingId(null);
        setEditedData({ id: 0, DrugName: '', Quantity: '', Manufacturer: '', ManufacturerCountry: '', Status: '' });
      } catch (error) {
        console.error('Error updating order:', error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteOrderFromServer(id);
      deleteOrder(id);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setEditedData({ ...editedData, [field]: e.target.value });
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">DrugName</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Manufacturer</th>
            <th className="px-4 py-2">ManufacturerCountry</th>
            <th className="px-4 py-2">Status</th>
            {!disableActions && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">
                {editingId === row.id ? (
                  <input type="text" value={editedData.DrugName} onChange={(e) => handleChange(e, 'DrugName')} />
                ) : (
                  row.DrugName
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === row.id ? (
                  <input type="text" value={editedData.Quantity} onChange={(e) => handleChange(e, 'Quantity')} />
                ) : (
                  row.Quantity
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === row.id ? (
                  <input type="text" value={editedData.Manufacturer} onChange={(e) => handleChange(e, 'Manufacturer')} />
                ) : (
                  row.Manufacturer
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === row.id ? (
                  <input type="text" value={editedData.ManufacturerCountry} onChange={(e) => handleChange(e, 'ManufacturerCountry')} />
                ) : (
                  row.ManufacturerCountry
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === row.id ? (
                  <select value={editedData.Status} onChange={(e) => handleChange(e, 'Status')}>
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="To be Corrected">To be Corrected</option>
                  </select>
                ) : (
                  Array.isArray(row.Status) ? row.Status.join(', ') : row.Status
                )}
              </td>
              {!disableActions && ( // Render actions buttons only if actions are not disabled
                <td className="border px-4 py-2">
                  {editingId === row.id ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(row.id)}>Edit</button>
                      <button onClick={() => handleDelete(row.id)}>Delete</button>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
