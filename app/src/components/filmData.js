import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    Container,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { getFilm } from "../actions";

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
            padding: "40px"
        },
        ratingStars: {
            verticalAlign: "bottom",
            marginRight: "10px"
        },
        cast: {
            margin: "20px 0"
        }
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
                                <ListItem>
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
