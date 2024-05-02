const apiUrl = "http://localhost:3005/orders";

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

export const addOrderToServer = async (orderData) => {
    try {
      console.log("Sending request to add order:", orderData); 
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
    //   console.log("Response from server:", data); 
      return data;
    } catch (error) {
      console.error("Error adding order:", error);
      throw error;
    }
  };
  

export const updateOrderOnServer = async (orderId, updatedOrderData) => {
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

export const deleteOrderFromServer = async (orderId) => {
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
