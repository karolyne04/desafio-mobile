
  
  const BASE_URL = "http://192.168.1.23:3000";
  
  
      
  export async function fetchEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(`${BASE_URL}/employees`);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
  
      // Transformando os campos para corresponder ao tipo Employee
      const data = await response.json();
      return data.map((employee: any) => ({
        id: employee.id,
        thumb: employee.image, // Mapeia 'image' para 'thumb'
        nome: employee.name,   // Mapeia 'name' para 'nome'
        cargo: employee.job,   // Mapeia 'job' para 'cargo'
        dataAdmissao: employee.admission_date, // Mapeia 'admission_date' para 'dataAdmissao'
        telefone: employee.phone, // Mapeia 'phone' para 'telefone'
      }));
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }