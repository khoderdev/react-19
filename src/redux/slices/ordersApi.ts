const apiUrl = "http://localhost:3005/orders";

let nextId = 1;

// Function to generate a sequence ID
export const generateSequenceId = () => {
  return nextId++;
};

// Function to fetch orders from the server
export const fetchOrdersFromServer = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// Function to add an order to the server
export const addOrderToServer = async (orderData: void) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
};

// Function to update an order on the server
export const updateOrderOnServer = async (orderId: any, updatedOrderData: any) => {
  try {
    const response = await fetch(`${apiUrl}/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrderData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

// Function to delete an order from the server
export const deleteOrderFromServer = async (orderId: number) => {
  try {
    const response = await fetch(`${apiUrl}/${orderId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};
