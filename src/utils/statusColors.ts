const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#FFA500"; // Orange
    case "Accepted":
      return "#22c55e"; // Green
    case "Rejected":
      return "#ef4444"; // Red
    case "To be corrected":
      return "#3b82f6"; // Blue
    default:
      return "#000000"; // Black
  }
};
export default getStatusColor;
