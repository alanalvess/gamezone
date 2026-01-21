import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const search = async (
    url: string,
    setDados: Function,
    header?: Object
) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const register = async (
    url: string,
    dados: Object,
    setDados: Function,
    header: Object
) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const update = async (
    url: string,
    dados: Object,
    setDados: Function,
    header: Object
) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const exclude = async (url: string, header: Object) => {
    await api.delete(url, header)
}