import { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { AuthLayout } from "../../container/layout/auth";
import { SignInWrapper } from "./styled";
import { BaseLegend } from "../../component/form/legend/styled";
import { BaseFieldSet } from "../../component/form/fieldset/styled";
import { BaseLabel } from "../../component/form/label/styled";
import { BaseInput } from "../../component/form/input/styled";
import { BaseButton } from "../../component/button/styled";
import { MailIcon, PasswordIcon } from "../../asset";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { signInUserService } from "../../util/api/authentication/signIn";

export const SignIn = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            const response = await signInUserService(formDetails);
            if (response.status === "success") {
                setIsLoading(false);
                cookies.set("TOKEN", response.token, {
                    path: "/",
                });
                navigate("/dashboard");
            } else {
                setIsLoading(false);
                setError('Authentication failed. Please check your credentials and try again.');
            }
        } catch (error: any) {
            navigate("/dashboard");
            setIsLoading(false);
            setError(`Login failed. ${error.message}`);
            console.error('Login failed:', error);
        }
    }

    return (
        <AuthLayout>
            <SignInWrapper
                onSubmit={handleSubmit}
            >
                <Box>
                    <BaseLegend>
                        Welcome Back
                    </BaseLegend>
                </Box>
                <BaseFieldSet>
                    <BaseLabel>
                        Email Address
                    </BaseLabel>
                    <BaseInput
                        required
                        type="email"
                        name="email"
                        value={formDetails.email}
                        sx={{ gap: "calc(var(--flex-gap)/4)" }}
                        startAdornment={<MailIcon />}
                        placeholder="Enter your email"
                        onChange={(e) => handleChange(e)}
                    />
                </BaseFieldSet>
                <BaseFieldSet>
                    <BaseLabel>
                        Password
                    </BaseLabel>
                    <BaseInput
                        required
                        type="password"
                        name="password"
                        value={formDetails.password}
                        sx={{ gap: "calc(var(--flex-gap)/4)" }}
                        startAdornment={<PasswordIcon />}
                        placeholder="Enter your password"
                        onChange={(e) => handleChange(e)}
                    />
                </BaseFieldSet>
                {error && <Typography
                    fontFamily={"Inter"}
                    fontWeight={"600"}
                    fontSize={14}
                    lineHeight={"normal"}
                    color={"#FF0000"}
                    whiteSpace={"normal"}
                >
                    {error}
                </Typography>}
                <Box
                    component={"div"}
                    className="call-to-action"
                >
                    <BaseButton
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                    >
                        {isLoading ? (
                            <CircularProgress color="inherit" className="loader" />
                        ) : (
                            <Typography
                                variant={"button"}
                                fontFamily={"inherit"}
                                fontWeight={"inherit"}
                                fontSize={"inherit"}
                                lineHeight={"inherit"}
                                color={"inherit"}
                                textTransform={"inherit"}
                            >
                                Sign in
                            </Typography>
                        )}
                    </BaseButton>
                </Box>
            </SignInWrapper>
        </AuthLayout>
    )
}