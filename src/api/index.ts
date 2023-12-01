import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// 환경 변수에서 API 기본 URL을 가져옵니다. 이 값은 .env 파일에 설정되어야 합니다.
const baseURL = process.env.REACT_APP_API_BASE_URL

// Axios 인스턴스를 생성합니다.
const apiInstance: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { "Content-Type": "application/json" },
})

// 요청 인터셉터
apiInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (
            config.method?.toLowerCase() === "post" &&
            config.data &&
            typeof config.data === "object"
        ) {
            config.data = JSON.stringify(config.data)
        }

        return config as any
    },
    (error: any) => {
        // 요청 에러 처리
        return Promise.reject(error)
    },
)

// 응답 인터셉터
apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답 데이터를 처리
        return response
    },
    (error: any) => {
        // 응답 에러 처리
        return Promise.reject(error)
    },
)

export default apiInstance
