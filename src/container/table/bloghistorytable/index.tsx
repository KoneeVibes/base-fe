import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { BaseTable } from "../../../component/table";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BlogHistoryTablePropsType } from "../../../type/container.type";
import { Menu } from "../../../container/menu"

export const BlogHistoryTable: React.FC<BlogHistoryTablePropsType> = ({ rows, selectedBlogPostId, handleEllipsisButtonClick, handleActionItemClick }) => {
    const actions = ["Edit Blog Post", "Delete Blog Post"];
    const blogHistoryTableHeaders = ["Post ID", "Thumbnail", "Title", "Date", ""];
    return (
        <BaseTable
            headers={blogHistoryTableHeaders}
        >
            <TableBody>
                {rows?.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row?.id}</TableCell>
                        <TableCell>{row?.thumbnail}</TableCell>
                        <TableCell>{row?.title}</TableCell>
                        <TableCell>{row?.date}</TableCell>
                        <TableCell>
                            <IconButton
                                sx={{
                                    borderRadius: "0.5rem",
                                    backgroundColor: "var(--sky-blue-color)",
                                    "&:hover": {
                                        backgroundColor: "var(--sky-blue-color)"
                                    }
                                }}
                                onClick={(e) => handleEllipsisButtonClick(e, row?.id)}
                            >
                                <MoreVertIcon
                                    sx={{
                                        color: "#FFFFFF",
                                        display: "inline-flex",
                                    }}
                                />
                            </IconButton>
                            <Menu
                                menuitems={actions}
                                open={selectedBlogPostId ? selectedBlogPostId === row?.id : false}
                                handleMenuItemClick={handleActionItemClick}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </BaseTable >
    )
}