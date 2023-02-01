import React, { useState } from 'react';
import './List.scss';

function ListData(props) {
	return props.listData?.map((list) => {
		return (
			<div className="depth1" key={list.text} onClick={list.clickHandler}>
				<div className="title">
					{list.icon ? <i className={list.icon ?? ''}></i> : null}
					<p>{list.text ?? ''}</p>
				</div>
				{list.children ? <Depth2 children={list.children} /> : null}
			</div>
		);
	});
}

function Depth2(props) {
	return (
		<ul className="depth2">
			{props.children.map((child) => {
				return (
					<li key={child.text} onClick={child.clickHandler}>
						{child.text}
					</li>
				);
			})}
		</ul>
	);
}

function List(props) {
	return (
		<div className={`list ${props.listData.type ?? ''}`}>
			<ListData listData={props.listData.data} />
		</div>
	);
}

export default List;
