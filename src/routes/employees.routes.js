
import { Router } from 'express';
import { allEmployees, 
  getEmployee, 
  insertEmployee, 
  updateEmployee,
  deleteEmployee } from '../models/employees.models.js';
const router = Router();

// GET all Employees
router.get('/', async (req, res) => {
  const employees = await allEmployees();
  res.status(200).json(employees);
});

// GET an Employee
router.get('/employee/:id', async (req, res) => {
 const { id } = req.params;
 const getOneEmployee = await getEmployee(id);
 res.status(200).json(getOneEmployee);
});

// INSERT an Employee
router.post('/employee/insert', async (req, res) => {
  const { name, salary } = req.body;
  const employee = { name, salary };
  try {
    const newEmployee = await insertEmployee(employee);
    res.status(200).json(newEmployee);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE an Employee
router.put('/employee/:id', async (req, res) => {
  /* const { name, salary } = req.body;
  const { id } = req.params; */
  const employee = { 
    nameUpdate : req.body.name, 
    salaryUpdate : req.body.salary, 
    idUpdate : req.params.id 
  };

  const result = await updateEmployee(employee);

  if(result.affectedRows === 0){
    return res.status(404).json({ msg: "employee not found" });
  }
  return res.status(200).json({ msg: "employee updated" });

});
// DELETE An Employee
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const result = deleteEmployee(id);
  
  if (result.affectedRows === 0) {
    return res.status(404).json({ msg: "employee not found" });
  }
    
  return res.status(204).json({ msg: "employee deleted" });
});


export default router;