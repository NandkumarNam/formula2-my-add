import React from 'react';

const PanelComp = class extends React.PureComponent {
    render() {
        const { children } = this.props;
        return <div>{children}</div>;
    }
};

PanelComp.displayName = 'PanelComp';
export default PanelComp;
