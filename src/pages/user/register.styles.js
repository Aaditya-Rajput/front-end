import { makeStyles } from "@material-ui/core";
import { LoginRegister } from "../../config/theming/images";

export default makeStyles((theme) => ({
    MainContainer: {
        height: "100vh",
    },
    Image: {
        backgroundImage: `url(${LoginRegister})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.background.paper,
        backgroundSize: "cover",
        backgroundPosition: "left center",
    },
    RightContainer: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[6],
    },
    RightContainerInner: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    BackButtonContainer: {
        alignSelf: "flex-start",
        cursor: "pointer",
    },
    Avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    FormContainer: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    SubmitButton: {
        margin: theme.spacing(3, 0, 2),
    },
    ErrorContainer: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        padding: theme.spacing(2),
        margin: theme.spacing(2, 0),
        boxShadow: theme.shadows[6],
    },
    CopyrightContainer: {
        margin: theme.spacing(4, 0),
    },
    GoogleTerms: {
        marginTop: theme.spacing(2),
        width: "100%",
    },
}));
