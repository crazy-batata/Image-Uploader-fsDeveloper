function Container({children,customClass}) {
    return (
        <div className={`Container-comp ${customClass}`}>
            {children}
        </div>
    );
}

export default Container;
