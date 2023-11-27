import React, { memo } from 'react';

// function arePropsEqual(oldProps, newProps) {
//     return JSON.stringify(oldProps.click) === JSON.stringify(newProps.click);
// }

// не важно примитив или ссылочные типы данных в пропсах, дочерний рендерится автоматом при рендере родителя(даже если только props.number)
// нам нужна именно связь React.memo и React.useMemo() в случае ссылочного
export const Child = memo((props) => {
    console.log('child render');

    const items = props.getItems();

    return (
        <h2>
            {props.number}
            {items.map(i => (<div>{i}</div>))}
        </h2>
    );
// }, arePropsEqual);
});