import React from 'react';

// 外层包裹的构造组件
function MyHoc (MyWrapper) {
	return class extends React.Component {
		render () {
			return <MyWrapper/>;
		}
	}
}
// 需要传入hoc里面的组件
class TestComponent extends React.Component {
	render () {
		return (
			<div>this is a normal Component.</div>
		)
	}
}

const FinalComponent = MyHoc(TestComponent);
export default FinalComponent;


