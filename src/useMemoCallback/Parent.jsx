import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Child } from "./Child";

const heavyComputation = (num) => {
    let i = 0;
    while (i < 1000000000) {
        i++
    }

    return num * 2;
}

export const Parent = () => {
    const [value, setValue] = useState(2);
    const [darkTheme, setDarkTheme] = useState(true);

    // ПРОБЛЕМА 1: при изменении не относящегося к нашей функции стейта(darkTheme)-дергается эта функция
    // решение: поместить в useMemo и вызывать только при изменении значения, нужного в ЭТОЙ функции(value)
    // const doubleNumber = heavyComputation(value);
    const doubleNumber = useMemo(() => {
        return heavyComputation(value);
    }, [value]);


    // ПРОБЛЕМА 3: когда передаём эту функцию в дочерний, который её вызывает, при передачи создаётся каждый раз
    // новая функция, если ререндерится наш компонент(а он должен ререндерится только если изменилось value)
    // РЕШЕНИЕ: поместить в useMemo и вызывать только при изменении значения, нужного в ЭТОЙ функции(value)
    // const getItems = () => [value + 1, value + 2, value + 3];
    const getItems = useMemo(() => () => [value + 1, value + 2, value + 3], [value]);
    // или синтаксический сахар useMemoCallback
    // const getItems = useMemoCallback(() => [value + 1, value + 2, value + 3], [value]);

    const style = useMemo(() => ({
        background: darkTheme ? 'brown' : 'pink'
    }), [darkTheme])

    // ПРОБЛЕМА 2: при кажом рендере компонента создаётся новый объект style. Если нам нужно выполнить что-то, основываясь
    // на изменении этого объекта, то у нас будет дергаться этот useEffect при каждом рендере(как-будто нет массива зависимостей вовсе)
    // РЕШЕНИЕ: обернуть ссылочный тип(style) также в useMemo
    useEffect(() => {
        console.log('смена темы')
    }, [style])

    console.log('parent render');

    return (
        <div style={{...style, border: '1px solid black'}}>
            <h1>Parent. вычисляемое свойство: {doubleNumber}</h1>
            <button onClick={() => setValue((prev) => prev + 1)}>Увеличить счётчик</button>
            <br/>
            <button onClick={() => setDarkTheme(!darkTheme)}>Поменять тему</button>
            <Child getItems={getItems} number={'111'} />
        </div>
    );
};