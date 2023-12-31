import { createContext, useState } from "react";
import { iChildren, iProfessor } from "../utils/interface";
import { toast } from "react-toastify";
import { API_KEY } from "../utils/API";

interface iNewProfessor {
  nome: string;
  cpf: string;
  especialidade:string;
  salario: number;
}

interface iProfessorContext {
  professoresData: iProfessor[];
  listaProfessores: () => void;
  totalPaginasProf: number;
  listaProfessoresPagination: (page: number, pageSize: number) => void;
  listaProfessorById: (id: string) => void;
  professorById: iProfessor | undefined;
  deleteProfessorById: (id: string | undefined) => void;
  addNewProfessor: (professor: iNewProfessor) => void;
}

export const ProfessoresContext = createContext({} as iProfessorContext);

export function ProfessoresProvider({ children }: iChildren) {
  const [professoresData, setProfessoresData] = useState<iProfessor[] | []>([]);
  const [totalPaginasProf, setTotalPaginasProf] = useState<number>(0);
  const [professorById, setProfessorById] = useState<iProfessor | undefined>();

  const apiKey =
    "http://vemser-hml.dbccompany.com.br:39000/leticiasantosgonc/vemser-tf-3-03-springsecurity";

  async function listaProfessores() {
    const response = await fetch(`${apiKey}/professor`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Erro ao fazer requisição!");
      return;
    }

    const resposta = await response.json();

    setProfessoresData(resposta);
  }

  const listaProfessoresPagination = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(
        `${apiKey}/professor/paginado?numeroDePaginas=${page}&quantidadeDeRegistros=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const resposta = await response.json();
      if (response.ok) {
        setProfessoresData(resposta.content);
        setTotalPaginasProf(resposta.totalPages);
      }
    } catch (error) {
      console.log("Desculpe, ocorreu um erro inesperado.");
    }
  };

  async function listaProfessorById(id: string) {
    const response = await fetch(`${apiKey}/professor/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Erro ao fazer requisição!");
      return;
    }

    const resposta = await response.json();

    setProfessorById(resposta);
  }

  async function deleteProfessorById(id: string | undefined) {
    const response = await fetch(`${apiKey}/professor/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Erro ao fazer requisição!");
      return;
    }
  }

  async function addNewProfessor(professor: iNewProfessor) {
    try {
      const response = await fetch(
        `${API_KEY}//professor`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            nome: professor.nome,
            cpf: professor.cpf,
            especialidade: professor.especialidade,
            salario: Number(professor.salario)
          }),
        }
      );
      console.log(professor)

      if (response.status === 500) {
        toast.error("Algo inesperado aconteceu!", {
          theme: "dark",
          position: "top-center",
        });
        return;
      }

      toast.success("Cadastro realizado com sucesso!", {
        theme: "dark",
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfessoresContext.Provider
      value={{
        professoresData,
        listaProfessores,
        totalPaginasProf,
        listaProfessoresPagination,
        professorById,
        listaProfessorById,
        deleteProfessorById,
        addNewProfessor
      }}
    >
      {children}
    </ProfessoresContext.Provider>
  );
}
