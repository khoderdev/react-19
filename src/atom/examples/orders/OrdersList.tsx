
import getStatusColor from '../../../utils/statusColors';
import { useAtom } from 'jotai';
import { ordersAtom } from '../../store';

const OrdersList = () => {
    const [orders] = useAtom(ordersAtom);


    return (
        <div className="overflow-x-auto flex flex-col w-full justify-center items-center">
            <h2 className="text-lg font-semibold">Orders List</h2>
            <div className="min-w-full">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Drug Name</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Manufacturer</th>
                            <th className="px-4 py-2">Country</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="border px-4 py-2">{order.DrugName}</td>
                                <td className="border px-4 py-2">{order.Quantity}</td>
                                <td className="border px-4 py-2">{order.Manufacturer}</td>
                                <td className="border px-4 py-2">{order.ManufacturerCountry}</td>
                                <td className="border px-4 py-2">
                                    <span style={{ color: getStatusColor(order.Status) }}>{order.Status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );

};

export default OrdersList;
