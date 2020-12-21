import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = ({ title, images, description, category, date, price}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="body2" color="textSecondary" component="p">
      Price: {price} $
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Category: {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Date: {new Date(date).toLocaleDateString()}
          </Typography>
        {/* <Button size="small" color="primary">
         Date: {new Date(date).toLocaleDateString()}
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default ProductCard;