import { AuthStore } from "../AuthStore"
import { jwtDecode } from "jwt-decode"

interface VerifyTokenResponse {
    status: number
}

export const HTTP_STATUS = {
    OK: 200,
    UNAUTHORIZED : 401
}

type Decoded = {
    [key:string]:string
}

// jwt検証キー
export const JWT_VERIFY_KEY = {
    AUDIENCE: "aud",
    EXPIRATION:"exp"
}


export class AuthClient {
PROJECT_ID="sample"
authStore
    constructor(private apiKey:string, private clientId:string,private authDomain:string,private redirectUri:string){
        this.authStore = new AuthStore()
    }


    verifyToken(): VerifyTokenResponse {
        const idToken = this.authStore.authorization
        if(idToken === undefined){
            return {
                status: HTTP_STATUS.UNAUTHORIZED
            }
        }

        // IDトークンの検証
        const decoded:Decoded = jwtDecode(idToken)

        
        const decodedToken = decoded[JWT_VERIFY_KEY.AUDIENCE]
        if(decodedToken !== this.clientId){
            return {
                status: HTTP_STATUS.UNAUTHORIZED
            }
        }

        const exp = decoded[JWT_VERIFY_KEY.EXPIRATION]
        const currentTime = Math.floor(Date.now() / 1000); // 現在の時刻をUNIXタイムで取得
        if (Number(exp) < currentTime) {
            console.log("トークンの有効期限が切れています");
            return {
                status: HTTP_STATUS.UNAUTHORIZED
            }
        }
        
        // 全て☑済み
        return {
            status: HTTP_STATUS.OK
        }

    }



    async getAccessToken(): Promise<string | undefined>{
        try {
            const verify = this.verifyToken()

        }
    }

}