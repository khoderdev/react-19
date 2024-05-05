// Define types for the order data

interface Order {
  deliveryStatus: string;
  DrugName: string;
  Quantity: string;
  Manufacturer: string;
  ManufacturerCountry: string;
}

// Define types for the async thunk actions' payloads

interface AddOrderPayload {
  // Assuming orderData has a specific structure, define it here
  // For example:
  // productName: string;
  // quantity: number;
  // etc.
}

interface UpdateOrderPayload {
  orderId: string;
  updatedOrderData: Partial<Order>; // Assuming only some fields of the order can be updated
}

// Define the state type for the order slice

interface OrderSliceState extends Order {
  // Additional state properties can be added here if needed
  // For example:
  // orders: Order[];
  // status: "idle" | "loading" | "succeeded" | "failed";
}

// Define types for action payloads

type DeliveryStatusPayload = string;
type DrugNamePayload = string;
type QuantityPayload = string;
type ManufacturerPayload = string;
type ManufacturerCountryPayload = string;

// Define the action types

type UpdateDeliveryStatusAction = {
  type: string;
  payload: DeliveryStatusPayload;
};
type UpdateDrugNameAction = { type: string; payload: DrugNamePayload };
type UpdateQuantityAction = { type: string; payload: QuantityPayload };
type UpdateManufacturerAction = { type: string; payload: ManufacturerPayload };
type UpdateManufacturerCountryAction = {
  type: string;
  payload: ManufacturerCountryPayload;
};
type FetchOrdersFulfilledAction = { type: string; payload: Order[] }; // Assuming orders are fetched as an array
type AddOrderFulfilledAction = { type: string; payload: Order }; // Assuming the added order is returned
type AddOrderRejectedAction = { type: string; error: any }; // Assuming error handling is consistent
type UpdateOrderFulfilledAction = { type: string; payload: Order }; // Assuming the updated order is returned
type DeleteOrderFulfilledAction = { type: string; payload: string }; // Assuming orderId is returned after deletion

// Define the union type for all action types

type OrderActionTypes =
  | UpdateDeliveryStatusAction
  | UpdateDrugNameAction
  | UpdateQuantityAction
  | UpdateManufacturerAction
  | UpdateManufacturerCountryAction
  | FetchOrdersFulfilledAction
  | AddOrderFulfilledAction
  | AddOrderRejectedAction
  | UpdateOrderFulfilledAction
  | DeleteOrderFulfilledAction;

export type {
  Order,
  AddOrderPayload,
  UpdateOrderPayload,
  OrderSliceState,
  DeliveryStatusPayload,
  DrugNamePayload,
  QuantityPayload,
  ManufacturerPayload,
  ManufacturerCountryPayload,
  UpdateDeliveryStatusAction,
  UpdateDrugNameAction,
  UpdateQuantityAction,
  UpdateManufacturerAction,
  UpdateManufacturerCountryAction,
  FetchOrdersFulfilledAction,
  AddOrderFulfilledAction,
  AddOrderRejectedAction,
  UpdateOrderFulfilledAction,
  DeleteOrderFulfilledAction,
  OrderActionTypes,
};
