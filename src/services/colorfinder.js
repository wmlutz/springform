import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

export default (base) => {
  switch (base) {
    case 'red':
      return red
    case 'pink':
      return pink
    case 'purple':
      return purple
    case 'deepPurple':
      return deepPurple
    case 'indigo':
      return indigo
    case 'blue':
      return blue
    case 'lightBlue':
      return lightBlue
    case 'cyan':
      return cyan
    case 'green':
      return green
    case 'lightGreen':
      return lightGreen
    case 'lime':
      return lime
    case 'yellow':
      return yellow
    case 'amber':
      return amber
    case 'orange':
      return orange
    case 'deepOrange':
      return deepOrange
    case 'brown':
      return brown
    case 'grey':
      return grey
    case 'blueGrey':
      return blueGrey
    default:
      return red;
  }
}