import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
    const styles = makeStyles(theme => ({
        header: {
            height: "280px",
            zIndex: "-1",
        }
    }))();

    return (
        <AppBar position="fixed" className={styles.header}>
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export default Header;
