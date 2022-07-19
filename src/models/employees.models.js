import { pool } from "./dbConnection.js";

export const allEmployees = async () => {
    try {
        const [ rows ] = await pool.query("SELECT * FROM employees");
        return rows;
    } catch (error) {
        console.log(error);
    }
}

export const getEmployee = async (id) => {
    const [ rows ] = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
    return rows;
};

export const insertEmployee = async (employeeData) => {
    const [ result ] = await pool.query("INSERT INTO employees SET ?", [employeeData]);
    return {
      ...employeeData,
      id : result.insertId,
    };
}

export const updateEmployee = async (employeeData) => { 
  const query = `UPDATE employees SET name = ${pool.escape(employeeData.name)}, 
  salary = ${pool.escape(employeeData.salary)} WHERE id = ${ employeeData.id };`;
  const [ result ] = await pool.query(query);
  return result;
};

export const deleteEmployee = async (id) => {
    const [ result ] = await pool.query(`DELETE FROM employees WHERE id = ${ pool.escape(id) };`);
    return result;
}