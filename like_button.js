'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Thanks for liking my homepage! For more information about me and my life you can email me @ddt1.sting.graceland.edu';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
	  
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);