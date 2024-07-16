import { useListFilesQuery } from "@state/api"
import DescriptionIcon from '@mui/icons-material/Description';
import { Tooltip, Typography } from "@mui/joy";

export default function FileArea() {

    const {
        data: files,
        isSuccess: success,
        isError: error,
        isLoading
    } = useListFilesQuery()

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
        <Typography level='h3'>Files</Typography>
        { success && files ?
            files.map((file, index) => {
                return (
                    <Tooltip title={file} key={index}>
                        <a href={`/api/files/${file}`} target="_blank"><DescriptionIcon style={{fontSize: '2.5rem', color: 'black'}} /></a>
                    </Tooltip>
                )
            }) :
            <div>{error}</div>
        }
        </>
    )
}