import { Box, Stack, Typography } from "@mui/material";
import { AuthLayoutWrapper } from "./styled";
import { AuthImage, LogoI } from "../../../asset";
import { AuthLayoutPropsType } from "../../../type/container.type";

export const AuthLayout: React.FC<AuthLayoutPropsType> = ({ children }) => {
    return (
        <AuthLayoutWrapper>
            <Stack
                className="image-box"
            >
                <Stack
                    className="auth-text-area"
                >
                    <Box>
                        <LogoI />
                    </Box>
                    <Box>
                        <Typography
                            variant="h1"
                            fontFamily={"Inter"}
                            fontWeight={700}
                            fontSize={"24px"}
                            lineHeight={"normal"}
                            color="var(--dark-h1-color)"
                            whiteSpace={"normal"}
                        >
                            Secure Login Portal
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={500}
                            fontSize={"14px"}
                            lineHeight={"normal"}
                            color="var(--dark-body1-color)"
                            whiteSpace={"normal"}
                            marginBlock={"calc(var(--basic-margin)/2)"}
                        >
                            Welcome to the Base login portal. This portal is for authorised personnel only. Please enter your credentials to access the system.
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    component={"div"}
                    className="auth-image-area"
                >
                    <AuthImage />
                </Box>
            </Stack>
            <Box
                component={"div"}
                className="form-box"
            >
                {children}
            </Box>
        </AuthLayoutWrapper>
    )
};
