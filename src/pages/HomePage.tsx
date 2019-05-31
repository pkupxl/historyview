import * as React from 'react';
import { WithStyles } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { StyleRules } from 'material-ui/styles/withStyles';
import { container, flexContainer} from '../variables/styles';
type HomePageStyleKeys = 'container' | 'flexContainer' | 'logoTitle' | 'img' | 'swipe';
type HomePageStyle = WithStyles<HomePageStyleKeys>;
const styles = () => ({
  container,
  flexContainer,
  swipe: {
    width: '1000px',
  },
  img: {
    maxWidth: 1000,
  },
  logoTitle: {
    position: 'relative',
    width: '300px',
    left: '18px',
    top: '18px'
  }
}) as StyleRules<HomePageStyleKeys>;


class HomePage extends React.Component<HomePageStyle, {}> {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.flexContainer}>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)<{}>(HomePage);
