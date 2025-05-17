/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { login } from "../hooks/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      await login({ email, password });
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-white p-8 w-full h-full">
        <h1 className="text-8xl font-light text-gray-500 mb-4 px-50">
          Simplificamos juntos
        </h1>
        <p className="text-md text-gray-400 absolute bottom-15">
          Supply Chain | Industrial | Systems
        </p>
      </div>

      <div className="bg-gray-200 p-6">
        <div className="bg-white w-full h-full p-10">
          <Card className="w-full bg-gray-100 rounded-md h-full justify-center relative">
            <CardContent>
              <div className="w-[50%] bg-white rounded-md p-10 text-center text-gray-400 mb-20 m-auto">
                LOGO
              </div>
            
              <p className="text-center text-gray-400 text-md mb-2 uppercase">Login</p>

              <div className="flex flex-col gap-4 pb-20">
                <Input 
                  className="bg-white text-sm px-5"
                  placeholder="EMAIL"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                  className="bg-white text-sm px-5"
                  placeholder="SENHA"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                { error && <p className="text-red-500 text-sm">{error}</p> }

                <Button 
                  className="bg-white text-gray-400 hover:bg-white hover:text-gray-500 w-fit self-center px-10 uppercase"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  { isLoading ? <Loader2Icon /> : "Logar" }
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <Button variant={"ghost"} className="uppercase text-gray-400">
                  Esqueci minha senha
                </Button>

                <Button variant={"ghost"} className="uppercase text-gray-400">
                  Cadastre-se
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
 
export default LoginPage;