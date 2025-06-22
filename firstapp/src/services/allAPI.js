import commonAPI from "./commonAPI";
import { serverUrl } from "./serverURL";

// Add new employee
export const addEmployeeAPI = async (reqBody) => {
  return await commonAPI('post', `${serverUrl}/addEmployee`, reqBody);
};

// Get all employees
export const getAllEmployeesAPI = async () => {
  return await commonAPI('get', `${serverUrl}/getEmployees`, "");
};

// Delete employee by ID


export const deleteEmployeeAPI = async (id, reqHeader) => {
    return await commonAPI("delete", `${serverUrl}/deleteEmployee/${id}`, "", reqHeader);
};




// Get a particular employee's details
export const getEmployeeByIdAPI = async (id) => {
  return await commonAPI('get', `${serverUrl}/getEmployee/${id}`);
};

// Edit a particular employee
export const updateEmployeeAPI = async (reqBody) => {
  return await commonAPI('post', `${serverUrl}/updateEmployee`, reqBody);
};
