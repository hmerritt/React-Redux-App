import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
    const styles = makeStyles(theme => ({
        header: {
            marginBottom: "50px"
        }
    }))();

    return (
        <AppBar position="static" className={styles.header}>
            <Container>
                <Toolbar>
                    <Typography variant="h6">IMDB Film Data</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
