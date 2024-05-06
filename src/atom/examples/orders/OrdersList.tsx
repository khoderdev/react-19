import getStatusColor from '../../../utils/statusColors';
import { useAtom } from 'jotai';
import { ordersAtom } from '../../store';

const OrdersList = () => {
    const [orders] = useAtom(ordersAtom);

    return (
        <div className="overflow-x-auto w-full">
            <h2 className="text-lg font-semibold text-center mb-4">Orders List</h2>
            <div className="shadow-md rounded-lg flex justify-center my-10 overflow-hidden">
                <table className="w-2/3 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left font-medium dark:text-[#fff] dark uppercase tracking-wider">Drug Name</th>
                            <th className="px-6 py-3 text-left font-medium dark:text-[#fff] dark uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left font-medium dark:text-[#fff] dark uppercase tracking-wider">Manufacturer</th>
                            <th className="px-6 py-3 text-left font-medium dark:text-[#fff] dark uppercase tracking-wider">Country</th>
                            <th className="px-6 py-3 text-left font-medium dark:text-[#fff] dark uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{order.DrugName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.Quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.Manufacturer}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.ManufacturerCountry}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
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
