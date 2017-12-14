import React from 'react';
import './WelcomePage.css';
import {Parallax, row, header} from 'react-materialize';

const WelcomePage = (props) => {
  return (
    <div>
      <Parallax imageSrc="https://i.imgur.com/kchp7Bc.jpg"/>
	<div className="section white">
		<div className="row container">
			<h2 className="header">Parallax</h2>
			<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
		</div>
	</div>
	</div>
  )
}

export default WelcomePage;