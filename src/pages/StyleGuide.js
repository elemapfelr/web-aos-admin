import React, { useEffect, useState } from 'react';
import style from './StyleGuide.module.scss';
import { Link } from 'react-router-dom';
import List from '../components/List/List';

function IndexList(props) {
	const url = '/system/styleGuide';
	const articleId = [
		['규칙', ['SCSS', '색상변수']],
		['요소', ['Button', 'Table']],
		['컴포넌트', ['List']],
	];
	return articleId.map((arr) => {
		return (
			<div key={arr[0]}>
				<h5 key={arr[0]}>{arr[0]}</h5>
				{arr[1].map((el) => {
					return (
						<Link to={`${url}#${el}`} key={el}>
							{el}
						</Link>
					);
				})}
			</div>
		);
	});
}

function Content() {
	let listData = {
		// type: 'accordion',
		data: [
			{
				icon: 'fa-solid fa-list',
				text: 'Depth1-1',
				clickHandler: () => {},
				children: [
					{
						text: 'Depth2-1',
						clickHandler: () => {
							console.log('click');
						},
					},
					{
						text: 'Depth2-2',
						clickHandler: () => {},
					},
					{
						text: 'Depth2-3',
						clickHandler: () => {},
					},
				],
			},
			{
				icon: 'fa-solid fa-list',
				text: 'Depth1-2',
				clickHandler: () => {},
				children: [
					{
						text: 'Depth2-4',
						clickHandler: () => {},
					},
					{
						text: 'Depth2-5',
						clickHandler: () => {},
					},
					{
						text: 'Depth2-6',
						clickHandler: () => {},
					},
				],
			},
		],
	};

	return (
		<div className={`${style.wrapper}`}>
			<div className={`${style.indexList} scrollable`}>
				<IndexList />
			</div>
			<div className={`${style.mainContent} scrollable`}>
				<article id="SCSS">
					<h2>SCSS</h2>
					<p>
						스타일시트는 SCSS 확장자를 사용하며, 따로 컴파일 과정을 거칠 필요 없이, 프로젝트를 빌드
						할 때 리액트 내부의 컴파일러로 적용됩니다.
					</p>
					<p>SCSS의 공통 요소는 "/scss" 폴더에 있으며, 이를 SCSS 파일에 적용할 때는</p>
					<code data-type="SCSS">@import "...경로/scss/bundle"</code>
					<p>해당 코드를 최상단에 입력해주시면 됩니다.</p>
					<br />
					<h3>_bundle.scss</h3>
					<p>_bundle.scss 파일에는 같은 디렉토리의 공용 scss 파일들이 포함되어 있습니다.</p>
					<p>이후에 다른 scss 파일이 추가되었을 경우 _bundle.scss에 import 해주시면 됩니다.</p>
					<code data-type="SCSS">@import "./color", "./animation", "./button", ...;</code>
					<br />
					<h3>module.scss</h3>
					<p>
						className이 겹칠 우려가 있을 경우 SCSS 파일의 확장자를 "파일명.module.scss" 로 입력하면
						컴파일 시 각 요소에 고유 클래스명을 부여하여 클래스명이 중복되는 문제를 피할 수
						있습니다.
					</p>
					<br />
					<p>module.scss 확장자는 아래와 같이 불러와 적용합니다.</p>
					<code data-type="JavaScript">
						import style from "...경로/파일명.module.scss"
						<br />
						...
						<br />
						{'<div className={style.클래스명}/>'}
					</code>
				</article>
				<article id="색상변수">
					<h2>색상변수</h2>
					<p>_color.scss 파일에는 기본으로 사용되는 색상변수들이 정의되어 있습니다.</p>
					<div className={`${style.flexBox} ${style.wrapperBox}`} style={{ flexWrap: 'wrap' }}>
						<div className={`${style.box} ${style.primary}`}>$primary</div>
						<div className={`${style.box} ${style.primaryLight}`}>$primary-light</div>
						<div className={`${style.box} ${style.primaryLighter}`}>$primary-lighter</div>
						<div className={`${style.box} ${style.primaryLightest}`}>$primary-lightest</div>
						<div className={`${style.box} ${style.primaryDark}`}>$primary-dark</div>
						<div className={`${style.box} ${style.secondary}`}>$secondary</div>
						<div className={`${style.box} ${style.secondaryDark}`}>$secondary-dark</div>
						<div className={`${style.box} ${style.secondaryDarker}`}>$secondary-darker</div>
						<div className={`${style.box} ${style.secondaryDarkest}`}>$secondary-darkest</div>
						<div className={`${style.box} ${style.gray}`}>$gray</div>
						<div className={`${style.box} ${style.white}`}>$white</div>
						<div className={`${style.box} ${style.whiteLight}`}>$white-light</div>
						<div className={`${style.box} ${style.whiteDark}`}>$white-dark</div>
						<div className={`${style.box} ${style.shadow}`}>$shadow</div>
						<div className={`${style.box} ${style.caution}`}>$caution</div>
						<div className={`${style.box} ${style.danger}`}>$danger</div>
						<div className={`${style.box} ${style.crush}`}>$crush</div>
					</div>
				</article>
				<article id="Button">
					<h2>버튼</h2>
					<p>버튼은 6가지 색상을 기본으로 제공하며, 필요에 따라 커스터마이징이 가능합니다.</p>
					<div className={`${style.flexBox} ${style.wrapperBox}`}>
						<button className="primary" style={{ marginRight: 5 + 'px' }}>
							Primary
						</button>
						<button className="secondary" style={{ marginRight: 5 + 'px' }}>
							Secondary
						</button>
						<button className="caution" style={{ marginRight: 5 + 'px' }}>
							Caution
						</button>
						<button className="danger" style={{ marginRight: 5 + 'px' }}>
							Danger
						</button>
						<button className="crush" style={{ marginRight: 5 + 'px' }}>
							Crush
						</button>
						<button className="gray" style={{ marginRight: 5 + 'px' }}>
							Gray
						</button>
					</div>
					<code data-type="JavaScript">
						{'<button className="primary">Primary</button>'}
						<br />
						{'<button className="secondary">Secondary</button>'}
						<br />
						{'<button className="caution">Caution</button>'}
						<br />
						{'<button className="danger">Danger</button>'}
						<br />
						{'<button className="crush">Crush</button>'}
						<br />
						{'<button className="gray">Gray</button>'}
					</code>
					<br />
					<h3>Outline Button</h3>
					<p>
						배경색 없이 테두리만 있는 버튼이 필요할 경우 클래스명을 .outline-*으로 변경하면 배경색
						없는 버튼이 생성됩니다.
					</p>
					<div className={`${style.flexBox} ${style.wrapperBox}`}>
						<button className="outline-primary" style={{ marginRight: 5 + 'px' }}>
							Primary
						</button>
						<button className="outline-secondary" style={{ marginRight: 5 + 'px' }}>
							Secondary
						</button>
						<button className="outline-caution" style={{ marginRight: 5 + 'px' }}>
							Caution
						</button>
						<button className="outline-danger" style={{ marginRight: 5 + 'px' }}>
							Danger
						</button>
						<button className="outline-crush" style={{ marginRight: 5 + 'px' }}>
							Crush
						</button>
						<button className="outline-gray" style={{ marginRight: 5 + 'px' }}>
							Gray
						</button>
					</div>
					<code data-type="JavaScript">
						{'<button className="outline-primary">Primary</button>'}
						<br />
						{'<button className="outline-secondary">Secondary</button>'}
						<br />
						{'<button className="outline-caution">Caution</button>'}
						<br />
						{'<button className="outline-danger">Danger</button>'}
						<br />
						{'<button className="outline-crush">Crush</button>'}
						<br />
						{'<button className="outline-gray">Gray</button>'}
					</code>
				</article>
				<article id="Table">
					<h2>테이블</h2>
					<p>테이블의 기본 스타일은 아래와 같습니다.</p>
					<div className={`${style.borderBox}`}>
						<table>
							<thead>
								<tr>
									<td>#</td>
									<td>Thead</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br />
					<h3>변형</h3>
					<p>
						상황에 따라 {'<tr>'} 태그에 클래스명을 입력하여 테이블 색상, 테이블 행 또는 개별 셀을
						사용하세요.
					</p>
					<div className={`${style.borderBox}`}>
						<table>
							<thead>
								<tr>
									<td>Class</td>
									<td>Heading</td>
									<td>Heading</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Default</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="primary">
									<td>Primary</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="secondary">
									<td>Secondary</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="caution">
									<td>Caution</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="danger">
									<td>Danger</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="crush">
									<td>Crush</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
								<tr className="dark">
									<td>Dark</td>
									<td>Cell</td>
									<td>Cell</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br />
					<h3>스트라이프 행</h3>
					<p>
						.stripe 를 사용하여 {'<tbody>'}내의 테이블 행에 줄무늬 (zebra-striping)를 추가합니다.
					</p>
					<div className={`${style.borderBox}`}>
						<table className="stripe">
							<thead>
								<tr>
									<td>#</td>
									<td>Thead</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br />
					<h3>테두리가 없는 테이블</h3>
					<p>테두리가 없는 테이블을 만들려면 .noBorder 를 추가하면 됩니다.</p>
					<div className={`${style.borderBox}`}>
						<table className="noBorder">
							<thead>
								<tr>
									<td>#</td>
									<td>Thead</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Tbody</td>
									<td>Tr</td>
									<td>Td</td>
								</tr>
							</tbody>
						</table>
					</div>
				</article>
				<article id="List">
					<h2>리스트</h2>
					<p>리스트 컴포넌트의 기본 스타일은 아래와 같습니다.</p>
					<div className={`${style.borderBox}`}>
						<div style={{ width: 300 + 'px' }}>
							<List listData={listData} />
						</div>
					</div>
					<code data-type="JavaScript">
						{"import List from '..경로/components/List/List';"}
						<br />
						...
						<br />
						{'<List listData={listData} />'}
					</code>
					<br />
					<p>리스트를 생성할 때 컴포넌트의 props에 listData 객체를 넘겨주어야 합니다.</p>
					<p>listData 객체의 기본 구조는 아래와 같습니다.</p>
					<code style={{ lineHeight: 'normal' }} className="pre" data-type="JavaScript">
						{JSON.stringify(listData, null, 2)}
					</code>
					<br />
					<h3>옵션</h3>
					<p>
						Depth는 최대 2단계까지 존재할 수 있으며 depth1 에는 icon, text, clickHandler 옵션을 줄
						수 있고
					</p>
					<p>depth2 에는 text, clickHandler 옵션을 줄 수 있습니다.</p>
					<div className={`${style.wrapperBox}`}>
						<p>
							<b>Depth1</b>
						</p>
						<p>
							└ icon : <i>string</i>
						</p>
						<p>
							└ text : <i>string</i>
						</p>
						<p>
							└ clickHandler : <i>function()</i>
						</p>
						<p>
							└ children : <i>Array[]</i>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;<b>(Depth2)</b>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;└ text : <i>string</i>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;└ clickHandler : <i>function()</i>
						</p>
					</div>
				</article>
			</div>
		</div>
	);
}

function StyleGuide() {
	return <Content />;
}

export default StyleGuide;
