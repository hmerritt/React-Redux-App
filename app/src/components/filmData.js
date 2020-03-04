import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
    Container,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from "@material-ui/core";
import { Person, ExpandMore } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { getFilm } from "../actions";
import Parser from 'html-react-parser';

const FilmData = props => {

    //  Get film object from redux store
    const film = props.film;

    //  Fetch film data
    useEffect(() => {
        props.getFilm();
    }, []);

    //  Style components
    const styles = makeStyles(theme => ({
        paper: {
            display: "block",
            padding: "40px",
            marginTop: "100px"
        },
        ratingStars: {
            verticalAlign: "bottom",
            marginRight: "10px"
        },
        cast: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "20px 0"
        },
        castItem: {
            width: "290px"
        },
    }))();

    return (
        <div className="film-card">
            <Container>
                <Paper className={styles.paper} elevation={2}>

                    {/* Title (year) */}
                    <Typography variant="h2">
                        {film.title} <small>({film.year})</small>
                    </Typography>

                    {/* Rating */}
                    <Typography variant="caption">
                        <Rating
                            className={styles.ratingStars}
                            name="rating"
                            value={film.rating}
                            precision={0.5}
                            max={10}
                            readOnly
                        />
                        {film.rating}
                    </Typography>

                    {/* Cast */}
                    <List className={styles.cast} dense>
                        {film.cast.map((person, key) => {
                            return (
                                <ListItem className={styles.castItem}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={person.actor}
                                        secondary={person.character}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>

                    {/* Technical Specs */}
                    <div className="technical_specs">
                        {
                            film.technical_specs.map((item, key) => {
                                return (
                                    <ExpansionPanel key={key}>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMore />}
                                        >
                                            <Typography>
                                                {
                                                    item[0]
                                                }
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                {
                                                    Parser(item[1])
                                                }
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                )
                            })
                        }
                    </div>

                </Paper>
            </Container>
        </div>
    );
};

export default connect(
    state => ({
        film: state.film.data
    }),
    { getFilm }
)(FilmData);
