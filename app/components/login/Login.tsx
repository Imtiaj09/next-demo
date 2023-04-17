'use client'

import Container from "@/app/Container";
import SignIn from "./SignIn";

const Login= () => {
  return (
    <div>
        <div>
            <Container>
                <div>
                    <SignIn/>
                </div>
            </Container>
        </div>
    </div>
  );
}

export default Login;