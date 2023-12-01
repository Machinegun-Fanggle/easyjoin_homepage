import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// 환경 변수에서 API 기본 URL을 가져옵니다. 이 값은 .env 파일에 설정되어야 합니다.
const baseURL = process.env.REACT_APP_API_BASE_URL
console.log("여기 baseURL")
console.log(process.env.REACT_APP_API_BASE_URL)

// Axios 인스턴스를 생성합니다.
const apiInstance: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { "Content-Type": "application/json" },
})

// 요청 인터셉터
apiInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 요청을 보내기 전에 수행할 작업
        // 예를 들어, 인증 토큰을 헤더에 추가할 수 있습니다.
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config as any
    },
    (error: any) => {
        // 요청 에러 처리
        return Promise.reject(error)
    },
)

// 응답 인터셉터
apiInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 요청을 보내기 전에 수행할 작업
        // 예를 들어, 인증 토큰을 헤더에 추가할 수 있습니다.
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        // POST 요청이면서 데이터가 객체 형태일 경우, 데이터를 JSON 형태로 변환합니다.
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

export default apiInstance
