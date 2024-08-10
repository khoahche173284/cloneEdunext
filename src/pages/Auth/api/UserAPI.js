import ApiClient from "./ApiClient";


const UserAPI = {
  register: async (userData) => {
    const response = await ApiClient.post("/users", userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await ApiClient.get("/users");
    const users = response.data;

    const user = users.find(u => u.email === credentials.email && u.password === credentials.password && u.campusId == credentials.campusId );
    if (user) {
      return {user};
    } else {
      throw new Error("Invalid credentials");
    }
  },

};

export default UserAPI;
