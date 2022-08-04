import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

interface props {
    title: string;
    description: string;
    img: string;
    link: string;
    className: string;
  }


export default function MediaCard(props: props) {
    const classes = useStyles();
    const { title, description, img, link } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.typography}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.text}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                >
                    Learn More
                </Link>
            </CardActions>
        </Card>
    );
}
