import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { ProgressBarPropsType } from "../../type/component.type";

export const ProgressBar: React.FC<ProgressBarPropsType> = ({ value }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
        >
            <Box
                sx={{ width: '100%', marginRight: 1 }}
            >
                <LinearProgress variant="determinate" value={value} />
            </Box>
            <Box
                sx={{ minWidth: 35 }}
            >
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={14}
                    lineHeight={"normal"}
                    color="var(--progress-bar-label-color)"
                >
                    {`${Math.round(value)}`}
                </Typography>
            </Box>
        </Stack>
    )
}