import React, { useState } from 'react';
import './Section.scss';

function Section(props) {
	return <section className="scrollable">{props.content}</section>;
}

export default Section;
