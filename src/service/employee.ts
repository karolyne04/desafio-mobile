
import { BASE_URL } from "../config";
      
  export async function fetchEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(`${BASE_URL}/employees`);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
  
     
      const data = await response.json();
      return data.map((employee: any) => ({
        id: employee.id,
        thumb: employee.image, 
        nome: employee.name,   
        cargo: employee.job,   
        dataAdmissao: employee.admission_date, 
        telefone: employee.phone, 
      }));
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }